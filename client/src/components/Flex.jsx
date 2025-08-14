import React from 'react';

function FlexBase({ children, className = '', baseClasses, ...props }) {
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}

// Column variations
export const FlexColStart = (props) => (
  <FlexBase
    baseClasses='w-auto flex flex-col items-start justify-start gap-3'
    {...props}
  />
);

export const FlexColEnd = (props) => (
  <FlexBase
    baseClasses='w-auto flex flex-col items-end justify-end gap-3'
    {...props}
  />
);

export const FlexColCenter = (props) => (
  <FlexBase
    baseClasses='w-auto flex flex-col items-center justify-center gap-3'
    {...props}
  />
);

export const FlexColStartBtw = (props) => (
  <FlexBase
    baseClasses='w-auto flex flex-col items-start justify-between gap-3'
    {...props}
  />
);

export const FlexColStartCenter = (props) => (
  <FlexBase
    baseClasses='w-auto flex flex-col items-center justify-start gap-3'
    {...props}
  />
);

// Row variations
export const FlexRowStart = (props) => (
  <FlexBase
    baseClasses='w-auto flex items-start justify-start gap-3'
    {...props}
  />
);

export const FlexRowStartCenter = (props) => (
  <FlexBase
    baseClasses='w-auto flex items-center justify-start gap-3'
    {...props}
  />
);

export const FlexRowEnd = (props) => (
  <FlexBase baseClasses='w-auto flex items-end justify-end gap-3' {...props} />
);

export const FlexRowStretch = (props) => (
  <FlexBase
    baseClasses='w-auto flex items-stretch justify-start gap-3'
    {...props}
  />
);

export const FlexRowEndCenter = (props) => (
  <FlexBase
    baseClasses='w-auto flex items-center justify-end gap-3'
    {...props}
  />
);

export const FlexRowStartBtw = (props) => (
  <FlexBase
    baseClasses='w-auto flex items-start justify-between gap-3'
    {...props}
  />
);

export const FlexRowCenter = (props) => (
  <FlexBase
    baseClasses='w-auto flex items-center justify-center gap-3'
    {...props}
  />
);

export const FlexRowCenterBtw = (props) => (
  <FlexBase
    baseClasses='w-auto flex items-center justify-between gap-3'
    {...props}
  />
);
