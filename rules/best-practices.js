module.exports = {
  rules: {
    // setter/getterのペアを強制する
    'accessor-pairs': 'off',

    // Arrayのmethodのcallback内でreturn文が使われてない
    'array-callback-return': 'error',

    // 変数が定義されているブロックの外で変数が使用されている
    'block-scoped-var': 'error',

    // if文等サイクルの複雑さをどれ位許容するか
    complexity: ['off', 11],

    // classのメソッドがthisを使うことを矯正する
    // 使われてないメソッドにフラグを立てるために使う
    'class-methods-use-this': ['off', {
      exceptMethods: [],
    }],

    // return に値を指定するか、値を指定しないかの2択のみ
    'consistent-return': 'error',

    // 制御文に中括弧{}を使うルール
    curly: ['error', 'multi-line'],

    // switch文でdefaultを使う。使わない場合はコメントで明示的に// no defaultとする
    'default-case': ['error', { commentPattern: '^no default$' }],

    // 可能な限りドット記法を使用する
    'dot-notation': ['error', { allowKeywords: true }],

    // ドットの前後には一貫した改行が必要
    'dot-location': ['error', 'property'],

    // 厳密等価演算を常に使う(nullの比較は無視)
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // for-inの中にifが無い場合
    // protoptypeチェーンで継承したメンバのフィルターの確認を目的とする
    'guard-for-in': 'error',

    // alert, confirm, promptを使わない
    'no-alert': 'warn',

    // arguments.caller もしくは arguments.calleeを使わない
    'no-caller': 'error',

    // switchのcase/defaultで変数宣言を禁止する
    // 使いたいならブロックで囲む。varだけ許可する。
    'no-case-declarations': 'error',

    // 正規表現の先頭に明示的に除算演算子を許可しません
    'no-div-regex': 'error',

    // もしブロックがreturn文が含まれている場合は、他のブロックが不要となります。その内容は、ブロックの外に配置することができます。
    'no-else-return': 'error',

    // 空の関数を禁止する
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // 空の構造体パターンを禁止する
    'no-empty-pattern': 'error',

    // 型チェックのオペレータなしnullとの比較を禁止
    'no-eq-null': 'off',

    // evalの使用を許可しない。
    'no-eval': 'error',

    // ネイティブ型への追加禁止
    'no-extend-native': 'error',

    // 必要の無い関数bindを禁止する
    'no-extra-bind': 'error',

    // 必要の無いlabelを禁止する
    'no-extra-label': 'error',

    // case文のフォールスルー
    'no-fallthrough': 'error',

    // 先頭または数値リテラルで小数点を後続の使用を禁止する
    'no-floating-decimal': 'error',

    // NativeObjectまたは読み取り専用Global変数への代入を禁止
    'no-global-assign': ['error', { exceptions: [] }],
    // 非グローバルアサインメントのために廃止予定
    'no-native-reassign': 'off',

    // 暗黙の型変換を禁止します。
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // グローバルスコープ内の変数と宣言を禁止する(暗黙のグローバル変数化を禁止)
    'no-implicit-globals': 'off',

    // eval()のようなメソッドの使用を許可しない
    'no-implied-eval': 'error',

    // クラスまたはクラスのようなオブジェクトの外側で、thisキーワードを使うのを許可しない
    'no-invalid-this': 'error',

    // __iterator__ プロパティの仕様を許可しない
    'no-iterator': 'error',

    // ラベルの使用を禁止する(ループとスイッチ以外)
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // 不要なブロックネストを許可しない
    'no-lone-blocks': 'error',

    // ループ内の関数の作成を許可しない
    'no-loop-func': 'error',

    // 明示的な意味を持たずにコード内に複数回現れる数字を許可しない
    // 数字は意味を明示的にするために定数として宣言されるようにするべき[
    'no-magic-numbers': ['error', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // 複数したスペースの使用を許可しません
    // スペースが２個並ぶやつ
    'no-multi-spaces': 'error',

    // 複数行の文字列の使用を許可しません
    // スラッシュで複数行にまたがって作るやつ
    'no-multi-str': 'error',

    // 比較または代入の伴わないnew演算子の使用を禁止する
    'no-new': 'off',

    // Functionオブジェクトのnew演算子での利用を禁止する
    'no-new-func': 'error',

    // String, Number Booleanのnewを使ったインスタンス生成を禁止する
    'no-new-wrappers': 'error',

    // 古いスタイルの8進数の利用を禁止する
    'no-octal': 'error',

    // 文字列リテラルで8進数のエスケープシーケンスの使用を禁止する
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // 関数の引数の再代入を禁止する
    'no-param-reassign': ['error', { props: true }],

    // __proto__ プロパティの使用を禁止する
    'no-proto': 'error',

    // 同じ変数の複数回宣言を禁止
    'no-redeclare': 'error',

    // 特定のオブジェクトのプロパティの使用を禁止する
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    // return文での代入を禁止する。緩くもできる
    'no-return-assign': 'error',

    // 不要な `return await` を禁止する
    'no-return-await': 'error',

    // `javascript:` urlの使用を禁止する.
    'no-script-url': 'off',

    // 自己代入を禁止する
    'no-self-assign': 'error',

    // 確実に等しいとわかるもの同士の比較を禁止する
    'no-self-compare': 'error',

    // カンマ演算子の使用を禁止する
    // 例外としてはグループ化演算子と共に使う
    'no-sequences': 'error',

    // Errorオブジェクトではないリテラルやその他の式をthrowすることを禁止する
    // 静的解析には限界があるので実行時に判明するものまではチェック無理
    'no-throw-literal': 'error',

    // ループ内でループ条件の未変更を禁止
    'no-unmodified-loop-condition': 'off',

    // プログラムの状態に影響を与えない未使用の式を禁止する
    //
    //"use strict";等のディレクティブには適用されない
    // allowShortCircuit: 式で短絡評価を使用可(default：false)
    // allowTernary: 短絡評価同様、3項演算子も使用可(default：false)
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
    }],

    // 使っていないラベルの使用を禁止
    'no-unused-labels': 'error',

    // 無駄な.call()および.apply()を禁止する
    // 関数呼び出しで代用出来るものは禁止
    'no-useless-call': 'off',

    // 不要な文字列同士の連結を禁止する
    // const test = 't' + 'e' + 's' + 't'
    'no-useless-concat': 'error',

    // 無駄なエスケープの使用を禁止する
    'no-useless-escape': 'error',

    // 不要なリターン文を許可しない
    // return文自体に意味がないのであれば使わない
    'no-useless-return': 'error',

    // void演算子の使用を禁止する
    // undefinedが可変な時代に不変なundefinedを取得するのに使われたりした
    'no-void': 'error',

    // 警告コメントを禁止する
    // termsに指定した単語を含むコメントを許可しない？
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // with文を禁止する
    'no-with': 'error',

    // PromiseのrejectはError objectsで処理されるべき
    // もしPromiseが値無しでrejectされた場合、rejectの発生源を特定しづらい
    // allowEmptyReject:空のrejectを許可するかどうか(default:false)
    'prefer-promise-reject-errors': ['off', { allowEmptyReject: true }],

    // parseInt()の第2引数(radix)の省略を禁止する
    // radix…基数(数学的記数法の底)
    radix: 'error',

    // async式の中にawait無しで利用してはいけない(これは決して使用すべきではない恐ろしい規則です by airbnb)
    'require-await': 'off',

    // 変数宣言はスコープの最上部に書くこと
    'vars-on-top': 'error',

    // 即時関数は()で包む
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // ヨーダ条件式の書式を禁止する
    yoda: 'error'
  }
};
