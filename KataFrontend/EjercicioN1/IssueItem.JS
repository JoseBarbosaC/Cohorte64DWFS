import React from 'react';

const IssueItem = ({ issue }) => {
  return (
    <div className="issue-item">
      <h2><a href={issue.html_url} target="_blank" rel="noopener noreferrer">{issue.title}</a></h2>
      <p>ID: {issue.id}</p>
      <p>Usuario: {issue.user.login}</p>
      <div>
        {issue.labels.map(label => (
          <span key={label.id} className="label" style={{ backgroundColor: `#${label.color}` }}>{label.name}</span>
        ))}
      </div>
    </div>
  );
};

export default IssueItem;
