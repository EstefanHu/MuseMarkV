import React, { useState } from 'react';

export const Delete = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  return !isDeleting ? (
    <button
      onClick={() => setIsDeleting(isDeleting => !isDeleting)}
    >
      Delete Account
    </button>
  ) : (
      <h1>:(</h1>
    )
}

