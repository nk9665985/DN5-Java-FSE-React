# Git Exercise 3 - Branching and Merging

## Aim

To understand the basic concepts of Git branching and merging.

## Steps Performed

1. Created a new branch named `GitNewBranch`.
2. Listed all available local and remote branches.
3. Switched to the new branch.
4. Created a new file and added content.
5. Committed the changes.
6. Checked the repository status.
7. Switched back to the main branch.
8. Compared the differences between the branches.
9. Merged the branch into the main branch.
10. Viewed the commit history.
11. Deleted the branch after a successful merge.

## Commands Used

```bash
git branch GitNewBranch
git branch -a
git checkout GitNewBranch
git status
git add .
git commit -m "Added files in GitNewBranch"

git checkout main
git diff main GitNewBranch
git mergetool
git merge GitNewBranch

git log --oneline --graph --decorate

git branch -d GitNewBranch
git status
```

## Result

The new branch was created successfully. Changes were committed, merged into the main branch, and the branch was deleted after the merge.