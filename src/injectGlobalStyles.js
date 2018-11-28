import { injectGlobal } from "styled-components";

export default () => injectGlobal`
    ${"" /* write global styles here */}
    *::before,
    *::after,
    * {
    box-sizing: border-box;
    }

    body {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    html {
        margin: 0;
        padding: 0;
        height: 100%;
}

    #root {
        min-height: 100vh;
    }
`;
