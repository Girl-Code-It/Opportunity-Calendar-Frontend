# Contribution is fun! :green_heart:
From opening a bug report to creating a pull request: every contribution is appreciated and welcome. If you're planning to implement a new feature or change the api please create an issue first. This way we can ensure that your precious work is not in vain.

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Happy Contributing :slightly_smiling_face:

## Creating Issues
### Bug Reports 
A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful, so thanks!

### Feature requests
Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

In order to make the contribution
process easy and effective for everyone involved, Please follow the instructions mentioned below!

## Pull Requests

## :arrow_down: Installation

- First, fork this repository :fork_and_knife: and follow the given instructions:

```bash
# clone the repository to your local machine
$ git clone https://github.com/<YOUR-GITHUB-USERNAME>/Opportunity-Calendar-Frontend.git

# navigate to the project's directory and install all the relevant dev-dependencies
$ cd Opportunity-Calendar-Frontend

# add upstream 
$ git remote add upstream https://github.com/Girl-Code-It/Opportunity-Calendar-Frontend

# include all the latest changes from the remote repository
$ git fetch upstream
$ git merge upstream/develop
```

Checkout to develop branch 
`$ git checkout develop` 

Next, create a new branch for the particular issue - `$ git checkout -b <NEW-BRANCH-NAME>` and make PR from that branch while leaving other branches unchanged :white_check_mark:
- Branch name should be feature/FeatureName or fix/FixName 

- Once you have made your changes, run the following command:

```bash
# add your changes
$ git add .

# make your commit
$ git commit -m "<YOUR-COMMIT-MESSAGE>"
The commit message should be in the format - `(feature/try) - Added try component`

#push your changes
git push -u origin NEW-BRANCH-NAME
```

> Think you're ready :grey_question: Make the PR :tropical_drink:
Always make PRs to develop branch 