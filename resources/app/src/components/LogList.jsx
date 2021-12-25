import React from 'react';

import '../styles/LogList.css';

const LogList = () => {
  return (
    <table className="log-list-table">
      <colgroup>
        <col style={{ width: '10%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '80%' }} />
      </colgroup>
      <thead>
        <tr>
          <td className="log-list-header-td">Time</td>
          <td className="log-list-header-td">Level</td>
          <td className="log-list-header-td">Message</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="log-list-td-time">April 4, 05:300</td>
          <td>ERROR</td>
          <td className="log-list-td-message">
            The app crashed in a horrific way The app crashed in a horrific way
            The app cras
          </td>
        </tr>
        <tr>
          <td className="log-list-td-time">April 4, 05:300</td>
          <td>ERROR</td>
          <td className="log-list-td-message">
            The app crashed in a horrific way The app crashed in a horrific way
            The app cras crashed crashed crashedcrashedcrashedvcrashed crashed
            crashed crashedcrashed
          </td>
        </tr>
        <tr>
          <td className="log-list-td-time">April 4, 05:300</td>
          <td>ERROR</td>
          <td className="log-list-td-message">
            The app crashed in a horrific way The app crashed in a horrific way
            The app cras
          </td>
        </tr>
        <tr>
          <td className="log-list-td-time">April 4, 05:300</td>
          <td>ERROR</td>
          <td className="log-list-td-message">
            The app crashed in a horrific way The app crashed in a horrific way
            The app cras
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LogList;
