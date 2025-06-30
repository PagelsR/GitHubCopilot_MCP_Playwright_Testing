# GitHubCopilot_MCP_Playwright_Testing
Generating Playwright Tests With AI using the MCP Server!

---

## Automating with `mcp-playwright` (MCP Playwright) Testing

## Getting Started

✅ **Enable Agent Mode**:
   - Click the **Extensions** icon in the VS Code sidebar.
   - Search for **Python** (by Microsoft).
   - Click **Install**.

✅ **Open Agent Mode Chat**:
- Open the **Copilot Ask** sidebar.
- Make sure **Agent Mode** is toggled on.
- You’re now ready to start pasting the prompts below.

✅ **Install Playwright**, make sure Playwright is installed:

- Open the terminal in VS Code.
- Run the following commands:

  ```bash
  npm init playwright@latest --yes "--" . '--quiet' '--browser=chromium' '--browser=firefox' '--gha'
  ```

**Start the Playwight MCP Server**:
- Open settings.json in VS Code.
- Find the `mcp-playwright.server` setting.
- Click `Start` to enable the Playwright server.

1. Open Visual Studio Code with `GitHubCopilot_MCP_Playwright_Testing` folder.

---

✅ You're all set to run this demo with GitHub Copilot Agent Mode. Paste each block below one at a time and enjoy the ride!

---


---

### 🧪 `tests/Shop by Brand.spec.ts`

**Title:**
Generate Playwright test for "Shop by Brand" flow

**Body:**
Create a Playwright test script named `Shop by Brand.spec.ts` and save it to the `/tests` folder.

**Test Scenario:**

1. Navigate to `https://app-6swivue3g4dqc-qa.azurewebsites.net/`
2. Select `.Net` from the `Shop by Brand` dropdown
3. Click the `Submit` button
4. Click `[ ADD TO BASKET ]` for the item `.NET Bot Black Sweatshirt`
5. Change the quantity to `99`
6. Click `[ CONTINUE SHOPPING ]`

**Notes:**

* Run the test with `headless: false` so I can watch the browser window in action
* Include `slowMo: 100` in the launch options for better visibility

