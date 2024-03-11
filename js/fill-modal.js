import { picturesArray } from "./data.js";

//@ функция, создающая комментарий
const createComment = (src, name, message) => {
	const comment = document.createElement('li');
	comment.classList.add('social__comment');

	const commentImg = document.createElement('img');
	commentImg.src = src;
	commentImg.alt = name;
	commentImg.style.width = '35px';
	commentImg.style.height = '35px';

	const commentMessage = document.createElement('p');
	commentMessage.textContent = message;

	comment.append(commentImg, commentMessage);

	return comment;
}


//@ функция, наполняющая модальное окно
const fillModal = (modalNode, clickedPicture) => {

	// блок количества комментариев
	const totalCommentsNumberNode = modalNode.querySelector('.social__comment-total-count');
	// блок списка комментариев
	const modalCommentsContainerNode = modalNode.querySelector('.social__comments');

	// перебор массива фотографий
	picturesArray.forEach(({ id, url, likes, comments, description }) => {

		// проверка, что id в объекте-фотографии соответствует номеру нажатой миниатюры
		if (id == clickedPicture.id) {

			// заполнение модального окна соответствующими данными
			modalNode.querySelector('.big-picture__img img').src = url;
			modalNode.querySelector('.likes-count').textContent = likes;
			totalCommentsNumberNode.textContent = comments.length;

			modalNode.querySelector('.social__caption').textContent = description;

			// обнуление блока-списка комментариев
			modalCommentsContainerNode.innerHTML = null;

			// заполнение блока-списка соответствующими комментариями
			for (let comment of comments) {
				modalCommentsContainerNode.append(createComment(comment.avatar, comment.name, comment.message));
			}

			// скрытие всех комментариев
			const commentsArray = modalNode.querySelectorAll('.social__comment');
			commentsArray.forEach(comment => {
				if (comment) {
					comment.hidden = true;
				}
			});

			// показ сразу 5 комментариев
			showComments(modalNode);

			// корректировка количества показываемых комментариев
			matchShownCommentsNumber();
		}
	});

}

//@ функция, показывающая 5 комментариев
const showComments = () => {
	const hiddenComments = document.querySelectorAll('.social__comment[hidden]');

	for (let i = 0; i < 5; i++) {
		if (hiddenComments[i]) {
			hiddenComments[i].hidden = false;
		}
	}
}

//@ функция, корректирующая число показываемых комментариев
const matchShownCommentsNumber = function () {
	const shownCommentsNumberNode = document.querySelector('.social__comment-shown-count');

	const totalCommentsArray = [...document.querySelectorAll('.social__comment')];
	const shownCommentsArray = totalCommentsArray.filter(comment => !comment.hasAttribute('hidden'))

	shownCommentsNumberNode.textContent = shownCommentsArray.length;
}

export { fillModal, showComments, matchShownCommentsNumber };