# 确保脚本抛出遇到的错误
set -e
npm run docs:build && cd dist
# github && 码云
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/qqlcx5/qunar.git gh-pages
cd -
