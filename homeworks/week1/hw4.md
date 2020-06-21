## 跟你朋友介紹 Git

嘿蔡哥，笑話給你三顆星，然後來跟你介紹一下:

 &emsp;首先 git 是一個幫你做版本控制的程式，依老師所言，你把版本想成資料夾會比簡單，一個笑話就好比一個檔案，要開新版本就是開一個資料夾。<br>
&emsp;git 可以讓你的資料夾沒有那麼混亂，當你想更新版本就再開一個資料夾放在裡面，你可以選擇在原版更改或是新版更改。

> ### 簡單來說會做幾件事 :
1.	需要新版本: 開一個資料夾
2.	不想加入版本控制: 不要加入資料夾
3.	避免版本衝突: 用看似亂數的東西當作資料夾名稱
4.	知道最新版本: 用一個檔案來存
5.	用檔案記歷史紀錄

> ### 幾個基本的指令

- 	`git init 初始化`
在資料夾底下打 git init ，git 就知道我們要對這個專案做版本控制
- `ls –al`  可以看到隱藏資料夾 .git，裡面有它配置好的東西

- `rm –r .git` 刪掉的話，就沒有 git 版本控制

- `git status` 看版本控制的狀態

- `git add` 決定是否加入版本控制(是否被 git 版本控制)
 
- `git add 檔案名` 檔案加入版本控制
 
 出現 :

 staged : 加入版本控制

 untrack : 不加入 

- `git rm --cached 檔案 ` 可以把檔案從 staged 移回到 untrack

- `git add .` 就會把資料夾底下所有檔案加入版本控制

- `git commit `新建一個版本

- `git commit –m “想輸入的版本敘述”`

- `git log` 看歷史紀錄

- `git log –oneline` 會顯示簡短的版本號 

- `git checkout` 回到某個版本

- `git checkout master` 可以回到最新的狀態
> ### 怎麼使用呢 ?

1.	`git init `初始化 

&emsp;先在一個有笑話檔案的資料夾底下打`git init`，git 就知道我們要對這個專案做版本控制，可用` git status `確認檔案狀況。

2. `.gitignore` 忽略不要的檔案，可想像成這檔案會被排除在資料夾外
` vim .gitignore `放不要的檔案存檔，用 `git status` 確認檔案狀況

3.  `git add .` 先把所有檔案加進去版本控制，可以想像成把東西移進去資料夾

4. `git commit –am ”init” ` 建立第一個 commit，可想像成建立一個新版本(其實就是資料夾)

> ### 當你要新增 or 更新檔案時

1. 加入版本控制`git add 檔名`把東西放入資料夾

2. 新建版本`git commit` 把資料夾複製改名為版本名稱，
假設改變了檔案，直接 `git commit –am”” `新建一個資料夾

3. 切換版本 `git checkout 版本名` 去到某個資料夾底下

> ### 來說說 branch

 &emsp;因為只有一條線很容易產生衝突，所以 ranch 可以讓開發新功能跟修復 bug 分開作業，確定都穩定後再合併起來，發布出去。
 
> branch的相關指令

- ` git branch –v `看有什麼 branch

- `git branch 新branch名`  可以建新的 branch

- `git branch –d branch名 `可以刪掉 branch

- `git checkout branch名 `可以切換到想去的 branch

- `git merge 要合併回來的branch` 可合併 branch 回 master

> ### 遇到衝突怎麼辦?
 &emsp;當把兩個 branch 合併的時，有時會跳出一個 conflict 跟你說哪個檔案有衝突。

 &emsp;進去檔案會看到，上面是現在的 branch、===是分割線、下面是要合併進來的 branch。你直接改成你要留下的，存檔即可。

> ### Github 一個放 git repository 的地方

假設你有需要抓人家的專案或放上自己的專案。

- `git push origin master or 你要的branch名`  把東西放上 github 同步

- `git pull origin master or 你要的branch名` 把 github 從遠端抓下來

- 衝突的話一樣，`vim`進去修改存檔再`commit –am ”” `再 push 上去
