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