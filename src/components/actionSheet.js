(() => ({
  name: 'ActionSheet',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonActionSheet } = window.Ionic;
    const [showActionSheet, setShowActionSheet] = useState(false);

    useEffect(() => {
      B.defineFunction('Open', () => setShowActionSheet(true));
      B.defineFunction('Close', () => setShowActionSheet(false));
    }, []);

    return (
      <div>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              handler: () => {
                console.log('Delete clicked');
              },
            },
            {
              text: 'Share',
              handler: () => {
                console.log('Share clicked');
              },
            },
            {
              text: 'Play (open modal)',
              handler: () => {
                console.log('Play clicked');
              },
            },
            {
              text: 'Favorite',
              handler: () => {
                console.log('Favorite clicked');
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              },
            },
          ]}
        />
      </div>
    );
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
