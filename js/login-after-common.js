//============= 로그인이 된  후 사용하는 공통 스크립트 파일 ==========================
// let localStorageId = getItemWithExpireTime('id');
// if (!localStorageId) {
//     //sessionStorage.setItem('isLogout', true);
//     location.href = '../html/login.html';
// }

// const sessionMemberId = sessionStorage.getItem('id');
// const sessionNickName = sessionStorage.getItem('nickName');

// console.log('sessionMemberId', sessionMemberId);
// console.log('sessionNickName', sessionNickName);

const loginMemberId = localStorage.getItem('id');
const loginMemberNickName = localStorage.getItem('nickName');