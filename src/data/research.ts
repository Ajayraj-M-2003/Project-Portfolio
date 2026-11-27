import type { ResearchPublication } from '../types/portfolio';

export const researchData: ResearchPublication = {
  title:
    'Proximal Policy Optimization for Risk-Adjusted Stock Portfolio Optimization: A Reinforcement Learning Approach',
  authors: [
    'Abhinav Saravanakumar',
    'Ajay Raj M',
    'Ala Venkata Chandana',
    'Enuguru Yashaswini',
    'K Abirami',
  ],
  highlightedAuthor: 'Ajay Raj M',
  journal: 'Computational Economics',
  publisher: 'Springer Nature',
  publishedDate: 'May 2026',
  doi: '10.1007/s10614-026-11355-2',
  doiUrl: 'https://doi.org/10.1007/s10614-026-11355-2',
  abstractSummary:
    'Co-authored a peer-reviewed reinforcement learning framework using Proximal Policy Optimization (PPO) in a custom Gym environment with a risk-aware reward function combining returns and the Sharpe ratio.',
  backtestNotice:
    'Historical Backtesting Results — Model trained on 2015–2023 equity data and evaluated in historical backtesting starting January 2024. These figures are empirical backtesting results, not live trading performance.',
  metrics: [
    {
      label: 'Algorithm',
      value: 'PPO RL',
      detail: 'Proximal Policy Optimization via Stable-Baselines3 & custom Gym',
    },
    {
      label: 'Asset Universe',
      value: '40 Stocks',
      detail: 'S&P 500 equities (2015–2023 training period)',
    },
    {
      label: 'Training Budget',
      value: '100,000',
      detail: 'Training timesteps with risk-aware reward',
    },
    {
      label: 'Cumulative Return',
      value: '38.64%',
      detail: 'Historical backtesting (from Jan 2024)',
    },
    {
      label: 'Sharpe Ratio',
      value: '2.10',
      detail: 'Risk-adjusted historical backtest metric',
    },
    {
      label: 'Max Drawdown',
      value: '6.26%',
      detail: 'Peak-to-trough historical backtest drawdown',
    },
  ],
  methodologyHighlights: [
    'Implemented a custom OpenAI Gym portfolio allocation environment for continuous multi-asset weight selection.',
    'Formulated a risk-aware reward signal combining portfolio returns with the Sharpe ratio to penalize excessive volatility.',
    'Trained a PPO agent using Stable-Baselines3 on 40 S&P 500 stocks (2015–2023) over 100,000 timesteps.',
  ],
};
