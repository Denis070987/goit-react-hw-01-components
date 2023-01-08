
import css from './FriendList.module.css'

export const FriendList = ({ friends }) =>
{
    return (
        <div className={css.friendWrapper}>
       <ul class="friend-list">
  <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
</ul> 
</div>
    )
}