#COMMENTS

##Lint-staged
find changed files on commit and update them config


```json
"lint-staged": {
    "*.json": "prettier --write",
    "*.astro": "prettier --write"
}
```