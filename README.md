# translate_game

На странице личного кабинета прогресс будет формироваться из двух массивов, которые будут прокинуты
пропсом: массив со всеми картами, в котором есть айди темы и массив со всеми ответами конкретного пользователя


Массив с темами нужен будет для прогресса и для добавления новой карточки

Новая карточка:
при нажатии на кнопку выводится две карточки их вывести в отдельный ui:
        1. выбрать из выподающего списка тему, которая уже есть, и два инпута для ввода слова на английском и на русском, и кнопка добавить
        2. три инпута для добавления темы и для слов на английском и на русском и кнопка добавить


res.locals.user для получения user.id
const targetUser = await User.findByPk(res.locals.user.id);

Сделать вложенность в CardPage и ChoosePage

      {tweets.map((tweet) => (
        <Col xs={12} key={tweet.id}>
          <TweetCard setData={setData} tweet={tweet} handleDelete={handleDelete} />
        </Col>
      ))}