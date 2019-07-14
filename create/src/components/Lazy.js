import React, { Suspense  } from 'react';
import Spinner from './SpinnerRoute';


const LazyIng = (e) => {
  return (
    <Suspense fallback={<Spinner />}>
      {e.children}
    </Suspense>
  )
}

export default LazyIng