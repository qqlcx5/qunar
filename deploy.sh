# 确保脚本抛出遇到的错误
set -e
npm run build && cd dist
# github && 码云
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:qqlcx5/qunar.git master:gh-pages
cd -
