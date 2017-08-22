module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    // arrow functionを中括弧{}で囲む必要がある
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // arrow functionの引数に括弧を必要とする
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],

    // arrow functionの矢印の前後にスペースを入れるか
    'arrow-spacing': ['error', { before: true, after: true }],

    // extend有無でsuper()コンストラクタの呼び出しをチェックする
    'constructor-super': 'error',

    // ジェネレータ関数の*の周りにスペースを入れる
    'generator-star-spacing': ['error', { before: false, after: true }],

    // クラス宣言の変数の変更を禁止する
    'no-class-assign': 'error',

    // 比較と混同するので、比較演算子と混同される可能性がある場所でarrow functionを禁止する
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // constを使用して宣言された変数の変更を禁止する
    'no-const-assign': 'error',

    // クラスメンバの名前の重複を禁止する
    'no-dupe-class-members': 'error',

    // 重複インポート禁止
    // offな理由が下記？
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // シンボルコンストラクタを禁止
    // 関数として呼び出してね
    'no-new-symbol': 'error',

    // 特定のインポートを禁止する
    'no-restricted-imports': 'off',

    // コンストラクタ内でsuper() のcallの前にthisの使用を禁止する
    'no-this-before-super': 'error',

    // オブジェクト上の不要な計算されたプロパティキーを許可しない
    // var a = { ['0+1,234']: 0 }; この［］に何の意味があるの、いや無い的な
    'no-useless-computed-key': 'error',

    // 不要なコンストラクタを許可しない
    // 何も処理書かないならコンストラクタ書くな的な
    'no-useless-constructor': 'error',

    // import、export、および分割代入の名前を同じ名前に変更できないようにする
    // the 無意味
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // var文の利用禁止
    // letとconstがそこにあるよ
    'no-var': 'error',

    // オブジェクトリテラルの省略形の構文を使う
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // arrow functionをコールバックとして使用
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // 再代入が発生していないlet,varに関してconstの利用を推奨
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // 配列やオブジェクトの分割代入を推奨
    'prefer-destructuring': ['off', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],

    // 2進数、8進数、16進リテラルのparseInt()を許可しない
    // ES6ではバイナリ、8進、16進のリテラルがサポートされているため
    'prefer-numeric-literals': 'error',

    // 適用可能な場合はReflectメソッドを使用する
    // Reflect.enumerateがes2017で削除予定
    // ESLint v3.9.0では非推奨とのこと
    'prefer-reflect': 'off',

    // argumentsの代わりにrestパラメータを使用することを推奨
    // (action, ...args) => args
    'prefer-rest-params': 'error',

    // apply()の代わりにスプレッド演算子を使用することを推奨
    'prefer-spread': 'error',

    // 文字列連結の代わりにテンプレートリテラルを使用することを推奨
    'prefer-template': 'off',

    // yieldを持っていないジェネレータ関数を禁止する
    'require-yield': 'error',

    // スプレッド演算子との間のスペースを許可しない
    'rest-spread-spacing': ['error', 'never'],

    // ソートされたimportを推奨する
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],

    // シンボルの説明を引数の設定を推奨する
    'symbol-description': 'error',

    // テンプレートリテラルのプレースホルダ構文の括弧内のスペースを禁止
    'template-curly-spacing': 'error',

    // yield式の*周りのスペースのルール
    'yield-star-spacing': ['error', 'after']
  }
};
