var MESSAGES = {
    'api-fail': 'Can\'t connect to the backend server',
    'unknown-error': 'Unknown error',
    'start-iban-disclosure': 'Starting disclosure of IBAN attribute...',
    'fetch-iban-token': 'Processing IBAN token...',
    'start-ideal-transaction': 'Starting iDEAL transaction...',
    'start-idin-transaction': 'Starting iDIN transaction...',
    'redirect-to-ideal-bank': 'Redirecting to iDEAL bank...',
    'redirect-to-idin-bank': 'Redirecting to iDIN bank...',
    'loading-return': 'Communicating with the bank...',
    'ideal-no-transaction': 'No transaction in progress.',
    'ideal-skip-confirm': 'Are you sure you want to skip this step?\nIt means that you may need to start from the beginning (costing you money) when the iDIN transaction fails!',
    'issuing-ideal-credential': 'Issuing iDEAL attributes...',
    'issuing-idin-credential': 'Issuing iDIN attributes...',
    'failed-to-verify-ideal': 'Failed to verify iDEAL transaction.',
    'failed-to-verify-idin': 'Failed to verify iDIN transaction.',
    'failed-to-issue-ideal': 'Failed to issue iDEAL attributes. You can try again below.',
    'failed-to-issue-idin': 'Failed to issue iDIN attributes. You can try again below.',
    'issue-success-ideal': 'Successfully issued iDEAL attributes!',
    'issue-success-idin': 'Successfully issued iDIN attributes!',
    'ideal-status:Cancelled': 'Transaction cancelled.',
    'ideal-status:Expired': 'Transaction expired.',
    'ideal-status:Open': 'Transaction is still open?', // ???
    'ideal-status:Failure': 'Transaction failed.',
    'ideal-status:other': 'Unknown transaction error.',
    'ideal-status:consumermsg': 'Transaction failed with a message:',
    'idin-status:Cancelled': 'The iDIN transaction was cancelled. Go back to the iDIN issue page to try again.',
    'idin-status:Expired': 'The iDIN session has expired. Go back to the iDIN issue page to try again. When this problem keeps occuring, contact your bank.',
    'idin-status:other': 'Something unexpected went wrong. Go back to the iDIN issue page to try again. When this problem keeps occuring, contact your bank.',
    'error:saml': 'Something unexpected went wrong. Go back and try again. When this problem keeps occuring, contact IRMA.',
    'error:missing-idin-attributes': 'The iDIN transaction did not give all attributes. Sadly this means we can\'t issue any attributes.',
};
