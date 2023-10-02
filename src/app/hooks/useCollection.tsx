import { useEffect, useState } from 'react';

import { db } from '~/app/data/firebase';
import { DocumentData, Query, collection, onSnapshot, query, setDoc } from 'firebase/firestore';

interface ChannelProps {
  id: string;
  channel: DocumentData;
}

// useCollection('チャンネル名')として、引数が関数に流れる
const useCollection = (data: string) => {
  // 空の配列
  const [documents, setDocuments] = useState<ChannelProps[]>([]);
  // 取得したいコレクション名を引数dataとして受入れ、
  // Firestoreのクエリを生成 -> collectionRef変数に格納
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    // リアルタイムで取得
    // channelsResultsという空配列
    // リアルタイムで取得した要素1つ1つに対しid, channel名を追
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: ChannelProps[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        }),
      );
      setDocuments(channelsResults);
    });
  }, []);

  return { documents };
};

export default useCollection;