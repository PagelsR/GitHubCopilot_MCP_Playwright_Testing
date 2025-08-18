
# Demo Flow, ADO MCP + Playwright + CI/CD

WIT aware version

This walkthrough shows how GitHub Copilot Agent Mode works with the ADO MCP server to create user stories, add linked test cases to a real test plan and suite, generate Playwright tests in the repo, trigger CI, and preserve traceability across ADO and code. It now fetches WIT definitions before composing acceptance criteria or test steps.

## Prerequisites

* ADO MCP server is connected and authenticated to your ADO org and project.
* Project name is `eShopOnWeb2024`, Test Plan ID is `14634`, Test Suite ID is `14681`.
* Repo already contains Playwright and a CI pipeline that runs tests from the `Tests/` folder.
* You can create and edit Work Items and Test Cases in ADO, and push to your demo branch.

---

## Step 1, List test plans

**Prompt**

```
Using the ADO MCP server, list all test plans for project 'eShopOnWeb2024'.
Return plan id and name.
```

**Expected result**
You see a list that includes: eShopOnWeb – Playwright UI Automation Plan, with its ID.

---

## Step 2, Get details for the target suite

**Prompt**

```
Get all test cases in suite 14681 for test plan 14634 in project 'eShopOnWeb2024'.
Show test id, title, steps count, state, priority, and assigned user.
```

**Expected result**
You see existing cases, which sets the baseline.

---

## Step 3, Fetch User Story WIT and create stories with valid acceptance criteria

First fetch the WIT to understand fields like `System.Title`, `System.Description`, and `Microsoft.VSTS.Common.AcceptanceCriteria`, then compose stories that follow that schema.

**Prompt A, fetch WIT for User Story**

```
Fetch the Work Item Type definition for 'User Story' in project 'eShopOnWeb2024'.
Return field reference names, required fields, allowed states, and any rules for Microsoft.VSTS.Common.AcceptanceCriteria.
```

**Prompt B, create stories using WIT info**

```
Using the 'User Story' WIT definition you just returned, create three user stories in project 'eShopOnWeb2024' with properly formatted Microsoft.VSTS.Common.AcceptanceCriteria.
Stories:
1) Add multiple products to basket from home page
2) Filter products by category
3) Checkout with guest account
Use concise acceptance criteria as bullet points that satisfy the WIT rules, and assign each story to Randy Pagels.
Return the new user story ids and links.
```

**Expected result**
New user stories created with acceptance criteria that conform to the WIT model.

---

## Step 4, Fetch Test Case WIT and create linked Test Cases

Fetch the Test Case WIT to map acceptance criteria into structured steps. Then create test cases in the real plan and suite.

**Prompt A, fetch WIT for Test Case**

```
Fetch the Work Item Type definition for 'Test Case' in project 'eShopOnWeb2024'.
Return field reference names, required fields, and the structure of test steps including action and expected result.
```

**Prompt B, create linked Test Cases**

```
For each user story created in Step 3, create a Test Case in project 'eShopOnWeb2024' under test plan 14634 and suite 14681.
Map each acceptance criterion to one or more ordered test steps following the 'Test Case' WIT step structure, including action and expected result.
Assign the Test Cases to Randy Pagels, then return new test case ids and links.
```

**Expected result**
Each story now has a matching Test Case inside plan 14634, suite 14681, with properly structured steps.

---

## Step 5, Spotlight a single story, create a focused Test Case for 14727

This showcases a targeted flow that bridges to Playwright generation.

**Prompt**

```
Create a new Test Case for user story 14727 in project 'eShopOnWeb2024' under test plan 14634, suite 14681.
Use the 'Test Case' WIT you fetched to structure steps with action and expected result.
Map the user story acceptance criteria to steps without inventing details.
Assign to Randy Pagels and return the new test case id and link.
```

**Expected result**
You get a single new Test Case tied to user story 14727 in the correct plan and suite.

---

## Step 6, Generate Playwright tests for new Test Cases

Produce real `.spec.ts` files in the `Tests/` folder, following the steps from each Test Case.

**Prompt, batch for all new cases**

```
Find all Test Cases created during this session in project 'eShopOnWeb2024' under test plan 14634, suite 14681.
For each case, generate a Playwright TypeScript test in the repo folder "Tests/" named "testCase_<TEST_CASE_ID>.spec.ts".
Translate each step into actions and assertions, use stable selectors, include basic cleanup, and do not modify playwright.config.ts.
Return a table with testCaseId, filePath, and a short summary of what each test covers.
```

**Prompt, single case for the 14727-linked Test Case**

```
Locate the Test Case linked to user story 14727 in project 'eShopOnWeb2024' under test plan 14634, suite 14681.
Generate a Playwright TypeScript test at "Tests/testCase_<FOUND_TEST_CASE_ID>.spec.ts" that follows the Test Case steps and acceptance criteria exactly.
Use stable selectors, avoid flakiness, and do not modify playwright.config.ts.
Return the resolved <FOUND_TEST_CASE_ID> and the created file path.
```

**Expected result**
New Playwright `.spec.ts` files appear under `Tests/`, one per Test Case.

---

## Step 7, Commit tests and trigger CI

**Prompt**

```
Stage all new files under "Tests/", create a commit with message "Add Playwright specs linked to ADO Test Cases in plan 14634 suite 14681", and push to the demo branch.
Return the commit hash and the CI pipeline run URL once the pipeline starts.
```

**Expected result**
CI pipeline picks up the tests and starts a run. You have the run link.

---

## Step 8, Link Playwright tests back to ADO Test Cases

Keep traceability tight by linking code and commits to work items.

**Prompt**

```
For each new Playwright file created in the "Tests/" folder during this session, link the file and its commit hash to the corresponding ADO Test Case in project 'eShopOnWeb2024', plan 14634, suite 14681.
Add the repository path as a hyperlink or attachment on the Test Case, and store the commit hash for traceability.
Return a table of testCaseId, filePath, commitHash, and the ADO Test Case link.
```

**Expected result**
Each Test Case shows a link to its Playwright script and the commit reference.

---

## Step 9, Report pipeline results and cross links

**Prompt**

```
Show the latest CI pipeline run that includes the new Playwright tests.
Return run status, tests passed and failed, a link to the run, and any ADO Test Case associations reported by the pipeline.
If failures exist, list the failing Test Case ids and spec file names.
```

**Expected result**
You see test outcomes and the ADO linkage.

---

## Step 10, Produce an end to end summary

**Prompt**

```
Create a summary of everything created in this session.
Include: user story ids and titles, new Test Case ids with links, generated Playwright file paths, commit hash, and the CI pipeline run URL and status.
Format as a short markdown table followed by one paragraph of narrative summary.
```

**Expected result**
You get a neat summary to paste in an email or attach to a work item.

---

## Optional, Clean up demo artifacts

**Prompt**

```
List all user stories and Test Cases created in this session in project 'eShopOnWeb2024'.
If I confirm "yes, clean up", delete those work items and open a pull request that removes the generated files under "Tests/".
Do not merge automatically. Return the PR link.
```

**Expected result**
Environment reset is staged, or kept for review.

---

### One line recap for your slide

Create stories using the User Story WIT, add Test Cases using the Test Case WIT in plan 14634 suite 14681, generate Playwright tests in `Tests/`, push so CI runs, link results back to ADO for full traceability.
