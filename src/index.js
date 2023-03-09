import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // ToDoリスト項目のdivを生成する
  const div = document.createElement("div");
  div.className = "list-row";
  // liタグ
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する要素からToDoテキスト取得
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    //押された完了ボタンの親divを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //div以下を初期化
    addTarget.textContent = null;
    //liタグ生成してToDoテキストを埋め込む
    const li = document.createElement("li");
    li.innerText = text;
    //戻すbutton生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      deleteFromCompleteList(backButton.parentNode);
      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //addTargetのdivタグに各要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの内側(子要素）にliを入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 完了リストから指定の要素を削除する関数
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
