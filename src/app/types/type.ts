// ユーザーの初期情報の型定義
export interface InitialUserState {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

// チャンネルの初期情報の型定義
export interface InitialChannelState {
  channelId: string | null;
  channelName: string | null;
}
