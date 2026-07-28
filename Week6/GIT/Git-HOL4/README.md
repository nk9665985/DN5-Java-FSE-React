# Git HOL4 - Merge Conflict Resolution

## Objective

To understand how merge conflicts occur in Git and learn how to resolve them.

## Steps Performed

1. Verified that the main branch was in a clean state.
2. Created a new branch named `GitWork`.
3. Added a file named `hello.xml`.
4. Updated the content of the file and committed the changes.
5. Switched back to the main branch.
6. Created another `hello.xml` file with different content.
7. Committed the changes in the main branch.
8. Compared the changes between the branches.
9. Merged the `GitWork` branch into the main branch.
10. Resolved the merge conflict using a merge tool.
11. Committed the resolved changes.
12. Added backup files to `.gitignore`.
13. Checked the repository status.
14. Deleted the merged branch.
15. Verified the commit history.

## Commands Used

```bash
git status
git checkout -b GitWork

git add hello.xml
git commit -m "Added hello.xml in GitWork"

git checkout main

git add hello.xml
git commit -m "Added hello.xml in main"

git log --oneline --graph --decorate --all

git diff

git mergetool

git merge GitWork

git status

git add .
git commit -m "Resolved merge conflict"

git branch

git branch -d GitWork

git log --oneline --graph --decorate
```

## Result

The merge conflict was resolved successfully. The changes were merged into the main branch, backup files were ignored using `.gitignore`, and the branch was deleted after merging.