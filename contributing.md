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
fits with the scope and aims of the project. It's up to _you_ to make a strong
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

## GIT AND GITHUB

Before continuing we want to clarify the difference between Git and Github. Git is a version control system(VCS) which is a tool to manage the history of our Source Code. GitHub is a hosting service for Git projects.

We assume you have created an account on Github and installed Git on your System.

Now tell Git your name and E-mail (used on Github) address.

     $ git config --global user.name "YOUR NAME"
     $ git config --global user.email "YOUR EMAIL ADDRESS"
     

This is an important step to mark your commits to your name and email.



### ADD A REMOTE (UPSTREAM) TO ORIGINAL PROJECT REPOSITORY 

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

    $ cd <your-forked-project-folder>
    $ git remote add upstream https://github.com/<author-account-username>/<project>.git
    
You will see the benefits of adding remote later.

### SYNCHRONIZING YOUR FORK -

Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.


    $ git checkout master
    $ git fetch upstream
    $ git merge upstream/master
    $ git push origin master
  

The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.



### REBASE YOUR FEATURE BRANCH WITH UPSTREAM-

It can happen that your feature takes time to complete and other contributors are constantly pushing code. After completing the feature your feature branch should be rebase on latest changes to upstream master branch.

    $ git checkout <feature-branch>
    $ git pull --rebase upstream master

Now you get the latest commits from other contributors and check that your commits are compatible with the new commits. If there are any conflicts solve them.

### SQUASHING YOUR COMMITS-

You have completed the feature, but you have made a number of commits which make less sense. You should squash your commits to make good commits.

```$ git rebase -i HEAD~5```    
This will open an editor which will allow you to squash the commits.

Want to know more about our project ? Checkout the link below
<br>
![https://www.youtube.com/watch?v=ZeHPcMZ-qlE](https://www.youtube.com/watch?v=ZeHPcMZ-qlE)

> Think you're ready :grey_question: Make the PR :tropical_drink:
> Always make PRs to develop branch
