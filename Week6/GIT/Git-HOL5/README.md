# Git HOL5 - Clean Up and Push to Remote Repository

## Objective

To learn how to synchronize the local repository with the remote repository using Git.

## Steps Performed

1. Verified that the main branch was in a clean state.
2. Listed all available branches.
3. Pulled the latest changes from the remote repository.
4. Pushed the local commits to the remote repository.
5. Verified that the changes were successfully updated in the remote repository.

## Commands Used

```bash
git status
git branch
git pull origin main
git push origin main
```

> If your remote repository uses **master** instead of **main**, use:

```bash
git pull origin master
git push origin master
```

## Result

The local repository was synchronized with the remote repository successfully. All pending changes were pushed to the remote repository.