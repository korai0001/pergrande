<?php
/* ****************************************************************
 * All Rights Reserved, Copyright(C) korai 2009
 * プログラム名：  家計簿システム
 * プログラムＩＤ：setting001
 * 作成日付：	   2009/10/21
 * 最終更新日：	   2008/10/21
 * プログラム説明：管理用設定初期画面
 * 変更履歴
 * 変更日時		変更者名			説明
 * 2009/10/21	紅雷				新規作成
*************************************************************** */
//共通function読み込み
	require('./common.php');
//共通ヘッダの表示
echo GetHeader($user_id,$conn);
?>
<h4>設定管理</h4><p>
<a href="setting002.php">ユーザー管理</a></p>
<a href="setting004.php">カテゴリ編集</a></p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<?php
//共通フッタの表示
echo GetFooter();
?>