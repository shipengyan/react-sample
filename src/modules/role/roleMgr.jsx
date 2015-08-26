var React = require('react');
var Mui = require('material-ui');

//icons
let ActionGrade = require('material-ui/lib/svg-icons/action/grade');
let ActionInfo = require('material-ui/lib/svg-icons/action/info');

let ContentDrafts = require('material-ui/lib/svg-icons/content/drafts');
let ContentInbox = require('material-ui/lib/svg-icons/content/inbox');
let ContentSend = require('material-ui/lib/svg-icons/content/send');

var {List, ListItem, ListDivider } = Mui;


var RoleMgr = React.createClass({
  render: function () {
    return (
      <div>
        <List>
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}/>
          <ListItem primaryText="Starred" leftIcon={<ActionGrade />}/>
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />}/>
          <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />}/>
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}/>
        </List>
        <ListDivider />
        <List>
          <ListItem primaryText="All mail" rightIcon={<ActionInfo />}/>
          <ListItem primaryText="Trash" rightIcon={<ActionInfo />}/>
          <ListItem primaryText="Spam" rightIcon={<ActionInfo />}/>
          <ListItem primaryText="Follow up" rightIcon={<ActionInfo />}/>
        </List>

      </div>
    );
  }
});

module.exports = RoleMgr;