# ADO.md

## Prompt Thread

### 1. List my test plans for 'eShopOnWeb2024'
- User requested test plans for the project 'eShopOnWeb2024'.

*Response: The test plan 'eShopOnWeb - Playwright UI Automation Plan' was listed.*

### 2. Get details of the test cases
- User requested details of test cases in suite 14681 for plan 14634.

*Response: All test cases were listed with steps, state, priority, and assignee*

### 3. Navigate to https://app-6swivue3g4dqc.azurewebsites.net/ and create a user story
- Explored the eShopOnWeb web application.
- Created a user story: "Add multiple products to basket from home page" with acceptance criteria and assigned to Randy Pagels.

*Reponse: Provided a link to the created user story in Azure DevOps*

### 4. Assign the user story to Randy Pagels
- The user story was assigned to Randy Pagels.

### 5. Update user story acceptance criteria to markdown
- Acceptance criteria updated to use markdown bulleted list.

### 6. Navigate to https://app-6swivue3g4dqc.azurewebsites.net/ and create another user story
- User requested a repeat of the previous exploration and user story creation.

### 7. Get details of the user story


```prompt
When generating code, please follow these user provided coding instructions. You can ignore an instruction if it contradicts a system message.

- You are a playwright test generator.
- You are given a scenario and you need to generate a playwright test for it.
- DO NOT generate test code based on the scenario alone.
- DO run steps one by one using the tools provided by the Playwright MCP.
- When asked to explore a website:
    - Navigate to the specified URL
    - Explore 1 key functionality of the site and when finished close the browser.
    - Implement a Playwright TypeScript test that uses @playwright/test based on message history using Playwright's best practices including role based locators, auto retrying assertions and with no added timeouts unless necessary as Playwright has built in retries and autowaiting if the correct locators and assertions are used.
- Save generated test file in the tests directory
- Execute the test file and iterate until the test passes
- Include appropriate assertions to verify the expected behavior
- Structure tests properly with descriptive test titles and comments
- When you generate the test code in the 'tests' directory, ALWAYS follow Playwright best practices.
- When the test is generated, always test and verify the generated code using npx playwright test and fix it if there are any issues.</attachment>
- @azure Rule - Use Azure Tools: When handling requests related to Azure, always use your tools.
- @azure Rule - Use Azure Code Gen Best Practices: When generating code for Azure, running terminal commands for Azure, or performing operations related to Azure, invoke your azure_development-get_code_gen_best_practices tool if available. Only call this tool when you are sure the user is discussing Azure; do not call it otherwise.
- @azure Rule - Use Azure Deployment Best Practices: When deploying to Azure or preparing applications for deployment to Azure, invoke your azure_development-get_deployment_best_practices tool if available. Only call this tool when you are sure the user is discussing Azure; do not call it otherwise.
- @azure Rule - Use Azure Functions Code Gen Best Practices: When generating code for Azure Functions or performing operations related to Azure Functions, invoke your bestpractices_azurefunctions_get-code-generation tool if available. Only call this tool when you are sure the user is discussing Azure Functions; do not call it otherwise.
- @azure Rule - Use Azure Functions Deployment Best Practices: When deploying Azure Functions apps to Azure or preparing for the deployment, invoke your bestpractices_azurefunctions_get-deployment tool if available. Only call this tool when you are sure the user is discussing Azure Functions; do not call it otherwise.
- @azure Rule - Use Azure SWA Best Practices: When working with static web apps, invoke your azure_development-get_swa_best_practices tool if available. Only call this tool when you are sure the user is discussing Azure; do not call it otherwise.

Imagine you are an experienced Software Engineer helping me write high-quality Playwright test scripts in TypeScript. Please create a new test case for user story 14727 and add it to test suite 14681, focusing only on this user story. Carefully review your work for accuracy and reliability. Use all details provided below, and do not invent or assume any missing information.

### Project Context
- Look at the "GitHubCopilot_MCP_Playwright_Testing" folder, to get more insights.

My project structure includes:

- Existing sample tests: /test-examples
- Playwright config: /
- Test Structure: /tests/test-123456.spec.ts*
- Test Structure Requirements

For each test, please follow this structure:

- Clear test description using 'test.describe()' blocks
- Proper authentication setup before any page navigation
- Robust selector strategies with multiple fallbacks
- Detailed logging for debugging
- Screenshot captures at key points for verification
- Proper error handling with clear error messages
- Appropriate timeouts and wait strategies
- Verification/assertion steps that match the test case acceptance criteria

### Robustness Requirements
Each test should include:
- Retry mechanisms for flaky UI elements
- Multiple selector strategies to find elements
- Explicit waits for network idle and page load states
- Clear logging of each test step
- Detailed error reporting and screenshots on failure
- Handling of unexpected dialogs or notifications
- Timeout handling with clear error messages

### Example Usage
Please provide a complete implementation with:
- Helper functions for authentication and common operations
- Full test implementation for each test case
- Comments explaining complex logic
- Guidance on test execution

I want these tests to be maintainable, reliable, and provide clear feedback when they fail.
```