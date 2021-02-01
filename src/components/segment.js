(() => ({
  name: 'segment',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonSegment, IonSegmentButton, IonLabel } = window.Ionic;
    const { env } = B;
    const isDev = env === 'dev';

    const Comp = (
      <IonSegment value="first" mode="ios">
        <IonSegmentButton value="first">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="second">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    );
    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
