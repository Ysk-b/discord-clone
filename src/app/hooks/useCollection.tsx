import { useEffect, useState } from 'react';

import { db } from '~/app/data/firebase';
import { DocumentData, Query, collection, onSnapshot, query } from 'firebase/firestore';

interface ChannelProps {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<ChannelProps[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
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
