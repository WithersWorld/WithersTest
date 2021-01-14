# Git and GitHub
GitHub is an advanced site where you can create repositories for git

- [WebyHow](https://withersworld.github.io/WithersTest/how/)
- Installing Git

## Putting Git in a Folder
- In your terminal type: `cd [folder]` one by one
    - Begin by your workspace

- Then type: `git init` to put git into your future repository folder
- Finishing by `git add .`
- !Don't close terminal!

## Using GitHub
- Go to [GitHub](https://github.com/)
- Create an account if you don't have one

- On your home page for GitHub there is a [NEW] button. Click it.
    - Choose your account and give your repository any name you want.
        - Make it public or private
        - Check add an README.md file
            - Click Create repository

## Putting Folder in the Repository
- Go back to your terminal
    - Type in: `git commit -m "New Repository"`
    - Type in: `git remote add origin [branch-name] [repository-url]`
        - In branch-name add in main or master
        - For repository-url add in your repository url
            - Looks like: `https://github.com/[account-name]/[repository-name]`
    - For last type in: `git push [branch-name]`

## Pushing and Pulling
- Pushing is when you updates the repository from your folder
- Pulling is when you update your folder from the repository

## Best For Git File Editors
- Visual Code
- Sublime Text + Sublime Merge

### Example
- Branch: master
- Repository url: https://github.com/Wither/WebyHow

- `git remote add orgin master https://github.com/Wither/WebyHow`
- `git push master`