import dayjs from 'dayjs';
import css from '@ionic/react/css/core.css';
import * as Core from '@material-ui/core';
import * as Lab from '@material-ui/lab';
import * as Pickers from '@material-ui/pickers';
import * as Styles from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import enLocale from 'date-fns/locale/en-US';
import nlLocale from 'date-fns/locale/nl';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge,
  IonButton,
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonApp,
  IonMenu,
  IonMenuButton,
  IonBackButton,
  IonButtons,
  IonModal,
  IonNav,
  IonSegment,
  IonSegmentButton,
  IonAvatar,
  IonSearchbar,
  IonListHeader,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonAlert,
} from '@ionic/react';

import Icons from './icons';

window.dayjs = dayjs;
window.Ionic = {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge,
  IonButton,
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonApp,
  IonMenu,
  IonMenuButton,
  IonBackButton,
  IonButtons,
  IonModal,
  IonNav,
  IonSegment,
  IonSegmentButton,
  IonAvatar,
  IonSearchbar,
  IonListHeader,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonAlert,
};

window.MaterialUI = {
  Core,
  Icons,
  Lab,
  Pickers,
  Styles,
  DateFnsUtils,
  DateLocales: { enLocale, nlLocale },
};
window.css = css;
