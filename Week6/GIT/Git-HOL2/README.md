# Git Exercise 2 - Git Ignore

## Aim

To learn how to ignore unwanted files and folders using the `.gitignore` file.

## Steps Performed

1. Created a Git repository.
2. Created a `.gitignore` file.
3. Added rules to ignore all `.log` files and the `logs` folder.
4. Created sample log files.
5. Verified that ignored files were not tracked by Git.

## .gitignore Rules

```text
*.log
logs/
```

## Commands Used

```bash
git status
git add .
git status
git commit -m "Added .gitignore file"
git push origin main
```

## Result

The `.log` files and the `logs` folder were successfully ignored by Git.