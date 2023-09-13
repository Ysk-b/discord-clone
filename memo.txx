■定義
・UIのstateをグローバルに管理するFW
・少量のstate管理はpropsの受け渡しで実現可。だが、開発規模が大きくなると管理が煩雑化し、保守性が低下する → Redux, useContextを使用した管理が有効

■原則
➀ Single source of truth
アプリケーション全体のstateはツリーの形で1つのオブジェクトで作られ、'1つのストア'に保存される
→ Storeは必ず1つ

➁ State is read-only
状態を変更する手段は、変更内容を保持するActionオブジェクトの発行・実行のみ
→ ビューやコールバックが状態を直接変更することはない

➂ Mutations are written as pure functions
「Reducer」は状態とアクションを受けて、新しい状態を返す関数で、アクションの状態変更に関する責務はReducerのみが持つ
→ 現在のStateオブジェクトは変更せず、'新しい'Stateオブジェクトを作って返す

■構成要素
・View: ユーザーの画面
・ActionCreator: アクション生成
・Action: ユーザーの入力したアクション
・Middleware: 副作用がある場合取り込む
  e.g.ボタンクリックの際サーバーのAPI叩く処理
・Reducer: 唯一状態を書き換えられる
・State: 現在の状態
・Store: 状態を保存する場所
・Slice: reducer + actionの集合体(name, initialState, reducersを含む)
・Dispatch: Storeに向けてActionを運ぶ

・Redux Toolkit: Reduxを用いた開発を効率的に行うためのツールキット
→ コードの総量削減が可能 = 可読性の向上
→ TypeScriptとの相性が良い
→ 機能ごとにState, Reducerを内包するSliceで切り分ける
→ Stateのimmutable性を意識しなくて良い → 直接変更する形式で記載可

・configureStore()
・createSlice()

・useReducer: useStateと同じく、stateの管理を行うhooks
 https://takayamato.com/react-usereducer/
 https://www.youtube.com/watch?v=uuAdVs7sbAs&t=1466s

・useDispatch: reducerにactionオブジェクトを送信する為の関数

■処理手順(入力 ~ 描画)
1. : ユーザーやアプリケーションのトリガーに応じて(onclickやonchange等)Actionがdispatchされる
※ Actionは必要な情報を含むオブジェクト
※ API CALL等同時並行で処理が必要な場合、middleWareを使用する
2. ActionはReducerに渡される
3. Reducerは受け取ったAction & Stateに応じて、新しいstateを生成してStoreに返す(上書き & 保存)
4. 更新されたStateがViewに描画・反映される

■注意
Reduxストア（またはGlobal State）の更新と、
コンポーネントのローカル状態(useStateで更新されるstate)は異なる概念。混同しない