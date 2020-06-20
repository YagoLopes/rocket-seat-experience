const { test, trait } = use('Test/Suite')('Workshop');

/** @type {typeof import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

trait('Test/ApiClient');
trait('DatabaseTransactions');

test('it should be able to creator workshops', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create();

  const response = await client
    .post('/workshops')
    .send({
      title: "And I am whatever you say I am. If I wasn't",

      description:
        "Mom, I know I let you down. And though you say the days are happy. Why is the power off and I'm fucked up?. And, Mom, I know he's not around. But don't you place the blame on me. As you pour yourself another drink, yeah. I guess we are who we are. Headlights shining in the dark night, I drive on. Maybe we took this too far.",
      user_id: user.id,
      section: 1,
    })
    .end();
  response.assertStatus(201);
  assert.exists(response.body.id);
});
