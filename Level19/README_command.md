To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

kumiichikawa@DESKTOP-QF25I1I:~$ $ basename "$(readlink "/proc/$$/exe")"
$: command not found
kumiichikawa@DESKTOP-QF25I1I:~$ basename "$(readlink "/proc/$$/exe")"
bash
kumiichikawa@DESKTOP-QF25I1I:~$ echo $BASH_VERSION                  # 1. シェルのバージョンを確認しましょう
5.1.16(1)-release
kumiichikawa@DESKTOP-QF25I1I:~$ echo "Hello World"                  # 2. “hello_world” を表示させましょう
Hello World
kumiichikawa@DESKTOP-QF25I1I:~$ echo "hello_world" > sample.txt     # 3. “hello_world” を格納した sample.txt を作成しましょう
kumiichikawa@DESKTOP-QF25I1I:~$ cat sample.txt    　　# 4. sample.txt の中身を表示させましょう
hello_world
kumiichikawa@DESKTOP-QF25I1I:~$ echo "2nd_text" >> sample.txt       # 5. sample.txt に “2nd_text” を追記しましょう
kumiichikawa@DESKTOP-QF25I1I:~$ grep "2" sample.txt             　  # 6. sample.txt 内の “2” が含まれる行のみ表示しましょう
2nd_text
kumiichikawa@DESKTOP-QF25I1I:~$ cat sample.txt                 　   # （参考）sample.txt の中身を表示
hello_world
2nd_text
kumiichikawa@DESKTOP-QF25I1I:~$ $ mv sample.txt hoge.txt　　　　　  # （入力誤り）ファイル名を hoge.txt に変更したかった
$: command not found
kumiichikawa@DESKTOP-QF25I1I:~$ mv sample.txt hoge.txt　　　　　　  # 7. sample.txt のファイル名を hoge.txt に変更しましょう
kumiichikawa@DESKTOP-QF25I1I:~$ dir=$(PWD)　　　　　　　　　　　　 # （入力誤り）作業中のフォルダ名を確認したかった
PWD: command not found
kumiichikawa@DESKTOP-QF25I1I:~$ pwd　　　　　　　　　　　　　　　  # （参考）作業しているフォルダ名の確認
/home/kumiichikawa
kumiichikawa@DESKTOP-QF25I1I:~$ mkdir fuga　　　　　　　　　　　　 # 8．fuga ディレクトリを作成ましょう
kumiichikawa@DESKTOP-QF25I1I:~$ ls -l　　　　　　　　　　　　　　  # （参考）作業中フォルダに保存されているファイル等の確認
total 12
drwxr-xr-x 2 kumiichikawa kumiichikawa 4096 Feb 11 23:19 fuga
-rw-r--r-- 1 kumiichikawa kumiichikawa   21 Feb 11 23:03 hoge.txt
drwx------ 3 kumiichikawa kumiichikawa 4096 Feb  4 11:21 snap
kumiichikawa@DESKTOP-QF25I1I:~$ cp hoge.txt fuga　　　　　　　　　  # 9.hoge.txt を fuga ディレクトリの下にコピーしましょう
kumiichikawa@DESKTOP-QF25I1I:~$ ^C                    　　　　　　　#（入力誤り）
kumiichikawa@DESKTOP-QF25I1I:~$ echo "3rd_text" >> hoge.txt 　　　　 # 10. fuga ディレクトリの下の hoge.txt に “3rd_text” を追記しましょう
kumiichikawa@DESKTOP-QF25I1I:~$ pwd　　　　　　　　　　　　　　　　# （参考）作業しているフォルダ名の確認　⇒ここで＃9のコマンドが間違っていたことに気づく
/home/kumiichikawa
kumiichikawa@DESKTOP-QF25I1I:~$ ls -l  # 詳細情報とともに一覧表示　# （参考）作業中フォルダに保存されているファイル等の確認
total 12
drwxr-xr-x 2 kumiichikawa kumiichikawa 4096 Feb 11 23:26 fuga
-rw-r--r-- 1 kumiichikawa kumiichikawa   30 Feb 11 23:27 hoge.txt
drwx------ 3 kumiichikawa kumiichikawa 4096 Feb  4 11:21 snap
kumiichikawa@DESKTOP-QF25I1I:~$ cat hoge.txt　　　　　　　　　　　　#11. 現在のディレクトリの hoge.txt の中身を表示させましょう
hello_world
2nd_text
3rd_text
kumiichikawa@DESKTOP-QF25I1I:~$ cd /home/fuga　　　　　　　　　　　#（入力誤り）fugaディレクトリに移動したかった
-bash: cd: /home/fuga: No such file or directory
kumiichikawa@DESKTOP-QF25I1I:~$ cd /home/kumiichikawa/fuga　　　　　# 12. fuga ディレクトリに移動しましょう
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ cat hoge.txt　　　　　　　　　# 13. 現在のディレクトリの hoge.txt の中身を表示させましょう
hello_world
2nd_text
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ formatted_date = (Get-Date).ToString("yyyy-MM-dd")　#（入力誤り）現在の日時を yyyy-MM-dd 形式で表示したかった
-bash: syntax error near unexpected token `（'
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ Get-Date -Format "yyyy-MM-dd"　　　　　　　　　　　#（入力誤り）現在の日時を yyyy-MM-dd 形式で表示したかった
Get-Date: command not found
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ Get-Date　　　　　　　　　　　　　　　　　　　　　#（入力誤り）現在の日時を yyyy-MM-dd 形式で表示したかった
Get-Date: command not found
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ formatted_date = (Get-Date).ToString("yyyy-MM-dd")　#（入力誤り）現在の日時を yyyy-MM-dd 形式で表示したかった
-bash: syntax error near unexpected token `（'
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ date　　　　　　　　　　　　　　　　　　　　　　　#（参考）現在の日時を yyyy-MM-dd 形式で表示したかった
Sun Feb 11 23:57:34 JST 2024
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ date +"%Y-%m-%d"　　　　　　　# 14. 現在の日時を yyyy-MM-dd 形式で表示させましょう
2024-02-11
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

kumiichikawa@DESKTOP-QF25I1I:~$ echo "3rd_text" >> fuga/hoge.txt  # 10. fuga ディレクトリの下の hoge.txt に “3rd_text” を追記しましょう
kumiichikawa@DESKTOP-QF25I1I:~$ cd /home/kumiichikawa/fuga        # 12. fuga ディレクトリに移動しましょう
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ cat hoge.txt                 # 13. 現在のディレクトリの hoge.txt の中身を表示させましょう
hello_world
2nd_text
3rd_text
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ pwd                           # （参考）作業しているフォルダ名の確認
/home/kumiichikawa/fuga
kumiichikawa@DESKTOP-QF25I1I:~/fuga$  cd /home/kumiichikawa        # （参考）myディレクトリへ移動
kumiichikawa@DESKTOP-QF25I1I:~$ cat hoge.txt　　　　　　　　　　　# 11. 現在 （myディレクトリ）のディレクトリの hoge.txt の中身を表示させましょう
hello_world
2nd_text
3rd_text
kumiichikawa@DESKTOP-QF25I1I:~$ sed -i '/3rd_text/d' hoge.txt      #（参考）myディレクトリのhoge.txtに記載された、3rd_textを削除（正しい状態へ戻した）
kumiichikawa@DESKTOP-QF25I1I:~$  cat hoge.txt　　　　　　　　　　　# 11. 現在（myディレクトリ）のディレクトリの hoge.txt の中身を表示させましょう（⇒11クリア）
hello_world
2nd_text
kumiichikawa@DESKTOP-QF25I1I:~$ cd /home/kumiichikawa/fuga　　　　　# （参考）fuga ディレクトリしましょうに移動
kumiichikawa@DESKTOP-QF25I1I:~/fuga$  cat hoge.txt                   #（参考）fuga ディレクトリの hoge.txt の中身を表示させましょう　⇒13クリア
hello_world
2nd_text
3rd_text
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ date +"%Y-%m-%d"　　　　　　　      #14. 現在の日時を yyyy-MM-dd 形式で表示させましょう
2024-02-12
kumiichikawa@DESKTOP-QF25I1I:~/fuga$ echo $(date +"%Y-%m-%d") >> log.txt  #15. 14の形式で表示したテキストを、log.txt に書き込みましょう。
