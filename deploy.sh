rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update dist" &&
git branch -M dist &&
git remote add origin git@github.com:Leslie-LiangGangwei/WheelHub-Plus.git &&
git push -f -u origin dist &&
cd -
echo https://leslie-lianggangwei.github.io/WheelHub-Plus/index.html