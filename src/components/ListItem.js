(() => ({
  name: 'ListItem',
  type: 'LIST_ITEM',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonCheckbox, IonLabel, IonNote, IonBadge, IonItem } = window.Ionic;
    return (
      <div>
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
      </div>
    );
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
