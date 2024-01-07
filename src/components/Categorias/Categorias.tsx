import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Categorias.module.css';

interface Props {
  className?: string;
}
/* @figmaId 10:0 */
export const Categorias: FC<Props> = memo(function Categorias(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes._352020ArrowBack1}></div>
      <div className={classes.categoriasMesa1}>Categorias | Mesa 01</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle8}></div>
      <div className={classes.bEBIDAS}>BEBIDAS</div>
      <div className={classes.rectangle72}></div>
      <div className={classes.rectangle82}></div>
      <div className={classes.lANCHES}>LANCHES</div>
      <div className={classes.rectangle73}></div>
      <div className={classes.rectangle83}></div>
      <div className={classes.pIZZAS}>PIZZAS</div>
      <div className={classes.rectangle74}></div>
      <div className={classes.rectangle84}></div>
      <div className={classes.dOCES}>DOCES</div>
      <div className={classes.rectangle75}></div>
      <div className={classes.rectangle85}></div>
      <div className={classes.sORVETES}>SORVETES</div>
      <div className={classes.rectangle76}></div>
      <div className={classes.rectangle86}></div>
      <div className={classes.pORCOES}>PORÇÕES</div>
    </div>
  );
});
