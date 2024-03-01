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

Добавить в страницу с карточками возможность удалять свои карточки

Добавить возможность редактирования профиля
Возможно вывести отрисовку карточки с личными данными в отдельный ui


    <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>

  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      await Post.update({ title, description }, { where: { id } });
      const updatePost = await Post.findOne({ where: { id } });
      res.json(updatePost);
    } catch {
      res.statusCode(500).json('Ошибка');
    }
  });

    const editHandler = async (e, id) => {
    e.preventDefault();
    const updatePost = Object.fromEntries(new FormData(e.target));
    const response = await fetch(`posts/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(updatePost),
    });
    if (response.status === 200) {
      const newPost = await response.json();
      setPosts((prev) => prev.map((post) => (post.id === id ? newPost : post)));
    }
  };

  const { name, password } = req.body;
  await User.update({ name, hashpass: await bcrypt.hash(password, 12) }, { where: { id } });

  Почему 12?

  Добавить оповещение о том, что карточка создана
  Уменьшить задержку при поиске темы
  