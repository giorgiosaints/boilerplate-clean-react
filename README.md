npx husky-init && npm install
npx husky add .husky/pre-commit "lint-staged"
npx husky add .husky/pre-push "yarn test:ci"

adasd