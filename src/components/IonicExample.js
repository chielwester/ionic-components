(() => ({
  name: 'IonicExample',
  type: 'ROW',
  allowedTypes: ['LIST_ITEM'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      IonContent,
      IonFab,
      IonFabButton,
      IonList,
      IonItem,
      IonPage,
      IonHeader,
      IonCheckbox,
      IonLabel,
      IonNote,
      IonBadge,
      IonToolbar,
      IonTitle,
    } = window.Ionic;
    return (
      <div className={classes.root}>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{options.pageTitle}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem>
                <IonCheckbox slot="start" />
                <IonLabel>
                  <h1>Create Idea</h1>
                  <IonNote>Run Idea by Brandy</IonNote>
                </IonLabel>
                <IonBadge color="success" slot="end">
                  5 Days
                </IonBadge>
              </IonItem>
              {children}
            </IonList>
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton href="/home">HOME</IonFabButton>
            </IonFab>
          </IonContent>
        </IonPage>
      </div>
    );
  })(),
  styles: () => () => ({
    root: { height: '100%' },
  }),
}))();
