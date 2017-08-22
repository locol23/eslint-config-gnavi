module.exports = {
  rules: {
    // 末尾のカンマを必要または使用不可にする
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // await内部のループを禁止する
    'no-await-in-loop': 'error',

    // -0との比較を禁止する
    'no-compare-neg-zero': 'error',

    // 条件文の代入演算子の禁止
    // 誤入力の可能性
    'no-cond-assign': ['error', 'always'],

    // consoleの使用を禁止する
    'no-console': 'warn',

    // 条件内の定数式を禁止する
    // 特定の動作のためのタイプミスまたは開発トリガーかもと推定できる
    'no-constant-condition': 'warn',

    // 正規表現で制御文字を許可しない
    // 制御文字は、ASCII範囲0-31の特殊な、不可視の文字でほとんど使用されないため、間違いの可能性が高い
    'no-control-regex': 'off',

    // debuggerを使用しない
    // 良い習慣として好まれなくなり、プロダクションコードの混入を防ぐ
    'no-debugger': 'error',

    // 重複する引数を許可しない
    'no-dupe-args': 'error',

    // オブジェクトリテラルの重複キーを禁止する
    // オブジェクトリテラルで同じキーを持つ場合、間違いの可能性
    'no-dupe-keys': 'error',

    // 重複するケースラベルを禁止する
    // プログラマがコピーでミスった可能性
    'no-duplicate-case': 'error',

    // 空のブロック文を許可しない
    // リファクタリング途中のコードである場合が多い。害は無いが、コードを読むときに混乱を招く可能性
    'no-empty': 'error',

    // 正規表現で空の文字クラスを許可しない
    // 正規表現の空の文字クラスは何も一致しない
    'no-empty-character-class': 'error',

    // catch句の中で例外を再割り当てできないようにする
    // エラーオブジェクトに代入するの禁止
    'no-ex-assign': 'error',

    // 不要なブールキャストを禁止する
    // 確実にboolが返ってくるようなものをキャストするの無駄
    'no-extra-boolean-cast': 'error',

    // 不必要な括弧を禁止する
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],

    // 余分なセミコロンを禁止する
    'no-extra-semi': 'error',

    // functionで宣言された名前の再割り当てを禁止する
    'no-func-assign': 'error',

    // ネストされたブロック内の変数または宣言を禁止する
    'no-inner-declarations': 'error',

    // RegExpコンストラクタで無効な正規表現文字列を許可しない
    'no-invalid-regexp': 'error',

    // 不規則な空白を禁止する
    'no-irregular-whitespace': 'error',

    // グローバルオブジェクトのプロパティを関数として呼び出すことを禁止する
    // MathとかJSONとかcallしないでね。
    'no-obj-calls': 'error',

    // 直接のObject.prototypes組み込み関数の使用を禁止する
    'no-prototype-builtins': 'error',

    // 正規表現リテラルで複数のスペースを許可しない
    'no-regex-spaces': 'error',

    // コンマの前に要素がない「穴」を持つ疎な配列リテラルを禁止する
    // const arr = [,,] だめ
    'no-sparse-arrays': 'error',

    // 通常の文字列にテンプレートのリテラルプレースホルダ構文を使用できないようにする
    'no-template-curly-in-string': 'error',

    // テートメントが終了していないような混乱を招く複数行の式を禁止する
    'no-unexpected-multiline': 'error',

    // returnの後のコード等、到達不能コードを許可しない
    'no-unreachable': 'error',

    // 制御フロー文をfinallyブロックで禁止する
    'no-unsafe-finally': 'error',

    // 関係演算子の左のオペランドを否定することを禁止する
    // 大抵の場合ミス
    // !key of obj ☓ !(key of obj) ◯
    'no-unsafe-negation': 'error',

    // no-unsafe-negationに置き換わる予定。非推奨オプション
    'no-negated-in-lhs': 'off',

    // NaNのチェックに、isNaN()以外のチェック方を禁止する
    'use-isnan': 'error',

    // 有効なJSDocコメントを適用する
    'valid-jsdoc': 'off',

    // typeofの比較に有効な文字列が指定されてるかチェック
    // requireStringLiterals: true は文字列かtypeof式のみに限定する厳密化オプション
    'valid-typeof': ['error', { requireStringLiterals: true }],
  }
};
