import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';
import { barColor, barFontColor } from '../../config';

const { variables, shadows } = themeConfig;

const barHeight = 46;

const container = css({
  background: barColor,
  boxShadow: shadows.cart.paymentBar,
  position: 'relative',
  zIndex: 2,
  overflow: 'hidden',
});

const innerContainer = css({
  padding: variables.gap.small,
});

const base = css({
  height: barHeight,
  position: 'relative',
});

const statusBar = css({
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  display: 'flex',
  height: '100%',
  padding: `0 ${variables.gap.small}px`,
  color: barFontColor,
  fontWeight: 'bold',
});

export default {
  container,
  innerContainer,
  base,
  statusBar,
};
