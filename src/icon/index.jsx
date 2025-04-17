import Icon from '@ant-design/icons';

const cpu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z"/>
      <path
        d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"/>
      <path strokeLinecap="round"
            d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"/>
    </g>
  </svg>
);

export const CpuIcon = (props) => (<Icon component={cpu} {...props} />);

const gpu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
       viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M4 8a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m7.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"/>
      <path
        d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5m5.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M9 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"/>
      <path
        d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5"/>
    </g>
  </svg>
);

export const GpuIcon = (props) => (<Icon component={gpu} {...props} />);

const memoryFill = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
       viewBox="0 0 256 256">
    <path fill="currentColor"
          d="M232 56H24A16 16 0 0 0 8 72v128a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0V72a16 16 0 0 0-16-16m-24 40v48h-64V96Zm-96 0v48H48V96Z"/>
  </svg>
)

export const MemoryFillIcon = (props) => (<Icon component={memoryFill} {...props} />)

const memoryLight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
       viewBox="0 0 256 256">
    <path fill="currentColor"
          d="M232 58H24a14 14 0 0 0-14 14v128a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0V72a14 14 0 0 0-14-14M22 72a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2v98H22Zm90 78a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6H48a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6Zm-58-48h52v36H54Zm90 48h64a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6m6-48h52v36h-52Z"/>
  </svg>
);

export const MemoryLightIcon = (props) => (<Icon component={memoryLight} {...props} />);

const network = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
       viewBox="0 0 24 24">
    <path fill="currentColor"
          d="M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4q.6 0 1.2.037t1.2.113l-1.5 2.9Q12.6 7 12.412 7H12Q9.1 7 6.563 8.088T2.1 11.1m4.25 4.25l-2.1-2.15q1.4-1.4 3.213-2.212t3.937-.938L9.8 13.3q-.975.3-1.85.813t-1.6 1.237m4.95 4.5q-.75-.275-1.162-1.037T10.1 17.3l6-12.2q.1-.2.288-.262t.412.012q.2.075.3.25t.05.4L13.9 18.65q-.2.825-1 1.163t-1.6.037m6.35-4.5q-.15-.15-.325-.3t-.375-.3l.8-3.15q.525.375 1.038.763t.962.837zm4.25-4.25q-.75-.75-1.612-1.375T18.45 8.6l.7-3q1.35.65 2.575 1.5T24 9z"/>
  </svg>
);

export const NetworkIcon = (props) => (<Icon component={network} {...props} />);

const display = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
       viewBox="0 0 16 16">
    <path fill="currentColor" fillRule="evenodd"
          d="M4 3h8a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 12 10H4a1.5 1.5 0 0 1-1.5-1.5v-1h2.25a.75.75 0 0 0 .564-.256l1.057-1.208L7.85 8.622A.75.75 0 0 0 9.1 8.7L10.375 7h1.375a.75.75 0 0 0 0-1.5H10a.75.75 0 0 0-.6.3l-.815 1.087l-1.434-2.51a.75.75 0 0 0-1.215-.12L4.41 6H2.5V4.5A1.5 1.5 0 0 1 4 3M1 6.75V8.5a3 3 0 0 0 3 3h3.25V13h-2.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-2.5v-1.5H12a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3z"
          clipRule="evenodd"/>
  </svg>
)

export const DisplayIcon = (props) => (<Icon component={display} {...props} />);

const audio = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
       viewBox="0 0 512 512">
    <path fill="currentColor"
          d="M16 160h32v192H16zm360 0h32v192h-32zM104 88h32v328h-32zm184 8h32v320h-32zm176 0h32v320h-32zM192 16h32v480h-32z"/>
  </svg>
)

export const AudioIcon = (props) => (<Icon component={audio} {...props} />);

export const music = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
       viewBox="0 0 24 24">
    <path fill="currentColor"
          d="M21 3v12.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5c.54 0 1.05.12 1.5.34V6.47L9 8.6v8.9A3.5 3.5 0 0 1 5.5 21A3.5 3.5 0 0 1 2 17.5A3.5 3.5 0 0 1 5.5 14c.54 0 1.05.12 1.5.34V6z"/>
  </svg>
)

export const MusicIcon = (props) => (<Icon component={music} {...props} />);

export const musicOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
       viewBox="0 0 24 24">
    <path fill="currentColor"
          d="M2 5.27L3.28 4L20 20.72L18.73 22L9 12.27v5.23A3.5 3.5 0 0 1 5.5 21A3.5 3.5 0 0 1 2 17.5A3.5 3.5 0 0 1 5.5 14c.54 0 1.05.12 1.5.34v-4.07zM21 3v12.5c0 1-.43 1.92-1.12 2.56l-4.94-4.94c.64-.69 1.56-1.12 2.56-1.12c.54 0 1.05.12 1.5.34V6.47l-8.83 1.88l-2.51-2.51z"/>
  </svg>
)

export const MusicOffIcon = (props) => (<Icon component={musicOff} {...props} />);

export const pause = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
       viewBox="0 0 24 24">
    <path fill="currentColor"
          d="M15 16h-2V8h2m-4 8H9V8h2m1-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>
  </svg>
)

export const PauseIcon = (props) => (<Icon component={pause} {...props} />);

const volumeOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
       viewBox="0 0 24 24">
    <path fill="currentColor"
          d="M16.775 19.575q-.275.175-.55.325t-.575.275q-.375.175-.762 0t-.538-.575q-.15-.375.038-.737t.562-.538q.1-.05.188-.1t.187-.1L12 14.8v2.775q0 .675-.612.938T10.3 18.3L7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h2.2L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm2.225-7.6q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.05T21 11.975q0 .825-.15 1.638t-.425 1.562q-.2.55-.612.688t-.763.012t-.562-.45t-.013-.75q.275-.65.4-1.312T19 11.975m-4.225-3.55Q15.6 8.95 16.05 10t.45 2v.25q0 .125-.025.25q-.05.325-.35.425t-.55-.15L14.3 11.5q-.15-.15-.225-.337T14 10.775V8.85q0-.3.263-.437t.512.012M9.75 6.95Q9.6 6.8 9.6 6.6t.15-.35l.55-.55q.475-.475 1.087-.213t.613.938V8q0 .35-.3.475t-.55-.125z"/>
  </svg>
)

export const VolumeOffIcon = (props) => (<Icon component={volumeOff} {...props} />);

const volume = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
       viewBox="0 0 24 24">
    <path fill="currentColor"
          d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2t-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.138T21 11.975t-1.95 5.613T14 20.725M3 15V9h4l5-5v16l-5-5zm11 1V7.95q1.175.55 1.838 1.65T16.5 12q0 1.275-.663 2.363T14 16"/>
  </svg>
)

export const VolumeIcon = (props) => (<Icon component={volume} {...props} />);
