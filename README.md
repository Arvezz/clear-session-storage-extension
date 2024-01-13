# Clear Session Storage Firefox Extension

## Overview

This Firefox extension allows you to clear session storage with a single click.

## Features

- **Clear Session Storage:** Click on the extension icon in the toolbar to clear session storage for the current tab.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for `npm` package manager)
- [web-ext](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/#install-the-web-ext-tool) (install using `npm install -g web-ext`)

## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/Arvezz/ClearSessionStorageExtension.git
    cd your-web-extension
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the web extension using `web-ext`:

    ```bash
    web-ext run
    ```

   This command launches the extension in a new Firefox instance, enabling you to test it in a development environment.

   Optionally, you can specify additional flags or parameters as needed for your project.

## Building the Web Extension

To build your web extension for distribution, you can use the `web-ext` tool. Follow these steps:

1. Navigate to the project directory:

    ```bash
    cd path/to/your-web-extension
    ```

2. Run the build command:

    ```bash
    web-ext build
    ```

   This command packages your web extension into a zip file ready for distribution.

   The resulting build will be located in the `web-ext-artifacts` directory within your project.

## Signing the Web Extension

Before distributing your web extension, you may want to sign it to enhance security and compatibility. Follow these steps:

1. [Sign up for an Add-ons Developer Account](https://addons.mozilla.org/en-US/developers/)

2. Log in to your account and navigate to the [Add-ons Developer Hub](https://addons.mozilla.org/en-US/developers/addon/)

3. Click on "Submit a new add-on" and follow the submission process.

4. Once approved, you can sign your extension using `web-ext`:

    ```bash
    web-ext sign --api-key=<YOUR_API_KEY> --api-secret=<YOUR_API_SECRET>
    ```

   Replace `<YOUR_API_KEY>` and `<YOUR_API_SECRET>` with your actual API key and secret obtained from the Developer Hub.

   The signed extension will be available in the `web-ext-artifacts` directory.

## Usage

- Ensure the web extension is loaded in the browser.
- Interact with the extension and test its functionality.
