declare module "stockfish" {
    function newWorker(): Worker;
    const STOCKFISH_VERSION: string;
    const STOCKFISH_REVISION: string;
    const STOCKFISH_LICENSE: string;
    const STOCKFISH_AUTHOR: string;
    const STOCKFISH_DATE: string;
    const STOCKFISH_TIME: string;
    const STOCKFISH_USER_AGENT: string;
    const STOCKFISH_IS_READY: RegExp;
    const STOCKFISH_ERROR: RegExp;
    const STOCKFISH_MOVE: RegExp;
    const STOCKFISH_GET_INFO: RegExp;
    const STOCKFISH_GET_STATE: RegExp;
    const STOCKFISH_START_THINKING: RegExp;
    const STOCKFISH_STOP_THINKING: RegExp;
    const STOCKFISH_PONDER_HIT: RegExp;
    const STOCKFISH_SET_OPTION: RegExp;
    const STOCKFISH_GET_OPTION: RegExp;
    const STOCKFISH_PGN_TAGS: RegExp;
    const STOCKFISH_PGN_TAG_NAME: RegExp;
    const STOCKFISH_PGN_TAG_VALUE: RegExp;
    const STOCKFISH_GET_CHESSBOARD: RegExp;
    const STOCKFISH_EMPTY_CHESSBOARD: string;
    const STOCKFISH_DEFAULT_VARIANT: string;
    const STOCKFISH_DEFAULT_DEPTH: number;
    const STOCKFISH_DEFAULT_MOVETIME: number;
    const STOCKFISH_DEFAULT_SKILL_LEVEL: number;
    const STOCKFISH_DEFAULT_PONDER: boolean;
    const STOCKFISH_DEFAULT_SHOW_PV: boolean;
    const STOCKFISH_DEFAULT_MULTI_PV: number;
    const STOCKFISH_DEFAULT_UCI_VARIANTS: string;
    const STOCKFISH_DEFAULT_ANALYSIS_CONTINUOUS: boolean;
    const STOCKFISH_DEFAULT_ANALYSIS_LIMITED: boolean;
    const STOCKFISH_DEFAULT_CLEAR_HASH: boolean;
    const STOCKFISH_DEFAULT_DEBUG_LOG: boolean;
    const STOCKFISH_DEFAULT_CONSOLE_MODE: boolean;
    const STOCKFISH_DEFAULT_LOG_ERRORS: boolean;
    const STOCKFISH_DEFAULT_EVAL_ROUGHNESS: number;
    const STOCKFISH_DEFAULT_SYZYGY_PATH: string;
    const STOCKFISH_DEFAULT_RESIGN_THRESHOLD: number;
    const STOCKFISH_DEFAULT_RESIGN_MOVE_COUNT: number;
    const STOCKFISH_DEFAULT_RESIGN_SCORE: number;
    const STOCKFISH_DEFAULT_BOOK_DEPTH: number;
    const STOCKFISH_DEFAULT_BOOK_RANDOM: boolean;
    const STOCKFISH_DEFAULT_BOOK_FILE: string;
    const STOCKFISH_DEFAULT_THREADS: number;
    const STOCKFISH_DEFAULT_HASH: number;
    const STOCKFISH_DEFAULT_CLEAR_THREADS: boolean;
    const STOCKFISH_DEFAULT_USE_SAN: boolean;
    const STOCKFISH_DEFAULT_CONTEMPT: number;
    const STOCKFISH_DEFAULT_QUIET: boolean;
    const STOCKFISH_DEFAULT_NODES: number;
    const STOCKFISH_DEFAULT_MATE: number;
    const STOCKFISH_DEFAULT_TIME: number;
    const STOCKFISH_DEFAULT_OTIM: number;
    const STOCKFISH_DEFAULT_INC: number;
    const STOCKFISH_DEFAULT_DEPTH_RANGE: [number, number];
    const STOCKFISH_DEFAULT_SKILL_LEVEL_RANGE: [number, number];
    const STOCKFISH_DEFAULT_EVAL_ROUGHNESS_RANGE: [number, number];
  
    type Option =
    | { name: string; type: "check"; value: boolean }
    | { name: string; type: "spin"; value: number; min: number; max: number }
    | { name: string; type: "combo"; value: string; options: string[] }
    | { name: string; type: "button" };
    type UciOption = {
        name: string;
        type: string;
        default?: any;
        min?: any;
        max?: any;
        var?: any;
        mask?: any;
        ponder?: any;
        infinite?: any;
        info?: any;
        string?: any;
        buttons?: any;
      };
    
      interface Worker extends EventTarget {
        onmessage: ((this: Worker, ev: MessageEvent) => any) | null;
        postMessage(message: any, transfer?: any[]): void;
        terminate(): void;
      }
    
      export {
        newWorker,
        STOCKFISH_VERSION,
        STOCKFISH_REVISION,
        STOCKFISH_LICENSE,
        STOCKFISH_AUTHOR,
        STOCKFISH_DATE,
        STOCKFISH_TIME,
        STOCKFISH_USER_AGENT,
        STOCKFISH_IS_READY,
        STOCKFISH_ERROR,
        STOCKFISH_MOVE,
        STOCKFISH_GET_INFO,
        STOCKFISH_GET_STATE,
        STOCKFISH_START_THINKING,
        STOCKFISH_STOP_THINKING,
        STOCKFISH_PONDER_HIT,
        STOCKFISH_SET_OPTION,
        STOCKFISH_GET_OPTION,
        STOCKFISH_PGN_TAGS,
        STOCKFISH_PGN_TAG_NAME,
        STOCKFISH_PGN_TAG_VALUE,
        STOCKFISH_GET_CHESSBOARD,
        STOCKFISH_EMPTY_CHESSBOARD,
        STOCKFISH_DEFAULT_VARIANT,
        STOCKFISH_DEFAULT_DEPTH,
        STOCKFISH_DEFAULT_MOVETIME,
        STOCKFISH_DEFAULT_SKILL_LEVEL,
        STOCKFISH_DEFAULT_PONDER,
        STOCKFISH_DEFAULT_SHOW_PV,
        STOCKFISH_DEFAULT_MULTI_PV,
        STOCKFISH_DEFAULT_UCI_VARIANTS,
        STOCKFISH_DEFAULT_ANALYSIS_CONTINUOUS,
        STOCKFISH_DEFAULT_ANALYSIS_LIMITED,
        STOCKFISH_DEFAULT_CLEAR_HASH,
        STOCKFISH_DEFAULT_DEBUG_LOG,
        STOCKFISH_DEFAULT_CONSOLE_MODE,
        STOCKFISH_DEFAULT_LOG_ERRORS,
        STOCKFISH_DEFAULT_EVAL_ROUGHNESS,
        STOCKFISH_DEFAULT_SYZYGY_PATH,
        STOCKFISH_DEFAULT_RESIGN_THRESHOLD,
        STOCKFISH_DEFAULT_RESIGN_MOVE_COUNT,
        STOCKFISH_DEFAULT_RESIGN_SCORE,
        STOCKFISH_DEFAULT_BOOK_DEPTH,
        STOCKFISH_DEFAULT_BOOK_RANDOM,
        STOCKFISH_DEFAULT_BOOK_FILE,
        STOCKFISH_DEFAULT_THREADS,
        STOCKFISH_DEFAULT_HASH,
        STOCKFISH_DEFAULT_CLEAR_THREADS,
        STOCKFISH_DEFAULT_USE_SAN,
        STOCKFISH_DEFAULT_CONTEMPT,
        STOCKFISH_DEFAULT_QUIET,
        STOCKFISH_DEFAULT_NODES,
        STOCKFISH_DEFAULT_MATE,
        STOCKFISH_DEFAULT_TIME,
        STOCKFISH_DEFAULT_OTIM,
        STOCKFISH_DEFAULT_INC,
        STOCKFISH_DEFAULT_DEPTH_RANGE,
        STOCKFISH_DEFAULT_SKILL_LEVEL_RANGE,
        STOCKFISH_DEFAULT_EVAL_ROUGHNESS_RANGE,
      };
    }