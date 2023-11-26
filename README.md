# ts-import-issue-reproduce

## Quick Start

```bash
# install deps
pnpm install

# open in vscode
code .
```

Open `packages/pkg-app/src/index.ts` and you will see there's no error in import.
It shouldn't working but it does.

## Test with ts-node

```bash
cd packages/pkg-app
pnpm run start
```

It's not working with ts-node.
