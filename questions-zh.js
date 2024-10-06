var questions = [
    {
        question: "面对挑战时，你的第一反应是什么？",
        options: [
            { text: "迎难而上！", house: "格兰芬多", weight: 3 },
            { text: "制定一个战略性的计划。", house: "拉文克劳", weight: 3 },
            { text: "努力工作直到克服它。", house: "赫奇帕奇", weight: 3 },
            { text: "找到将挑战变为优势的方法。", house: "斯莱特林", weight: 3 },
            { text: "避开它，希望它自己解决。", house: "赫奇帕奇", weight: 3 },
            { text: "跟随别人的领导来应对。", house: "斯莱特林", weight: 3 },
        ]
    },
    {
        question: "你在朋友中最看重什么？",
        options: [
            { text: "忠诚", house: "赫奇帕奇", weight: 3 },
            { text: "勇气", house: "格兰芬多", weight: 3 },
            { text: "智慧", house: "拉文克劳", weight: 3 },
            { text: "野心", house: "斯莱特林", weight: 3 },
            { text: "可靠性", house: "赫奇帕奇", weight: 3 },
            { text: "轻信", house: "斯莱特林", weight: 3 },
            { text: "良好的幽默感", house: "拉文克劳", weight: 3 },
        ]
    },
    {
        question: "你对学习的态度是什么？",
        options: [
            { text: "知识就是力量。", house: "拉文克劳", weight: 3 },
            { text: "通过实践学习。", house: "格兰芬多", weight: 3 },
            { text: "熟能生巧。", house: "赫奇帕奇", weight: 3 },
            { text: "学习能让我前进的东西。", house: "斯莱特林", weight: 3 },
            { text: "只学习我需要的东西。", house: "赫奇帕奇", weight: 3 },
            { text: "我喜欢从别人的错误中学习。", house: "斯莱特林", weight: 3 }
        ]
    },
    {
        question: "如果有人伤害了你，你会怎么反应？",
        options: [
            { text: "原谅他们并继续前进。", house: "赫奇帕奇", weight: 3 },
            { text: "找到一种方法，确保他们不再这样做。", house: "斯莱特林", weight: 3 },
            { text: "直接与他们对抗。", house: "格兰芬多", weight: 3 },
            { text: "把它当作一次学习的经历。", house: "拉文克劳", weight: 3 },
            { text: "避开他们，继续自己的生活。", house: "赫奇帕奇", weight: 3 },
            { text: "假装不在乎，但暗地里消极对待。", house: "斯莱特林", weight: 3 }
        ]
    },
    {
        question: "你如何应对压力？",
        options: [
            { text: "花点时间让自己冷静下来。", house: "赫奇帕奇", weight: 3 },
            { text: "立刻解决问题。", house: "格兰芬多", weight: 3 },
            { text: "通过逻辑思考解决。", house: "拉文克劳", weight: 3 },
            { text: "把压力转化为成功的动力。", house: "斯莱特林", weight: 3 },
            { text: "拖延并希望它会消失。", house: "赫奇帕奇", weight: 3 },
            { text: "寻找能为我解决问题的人。", house: "赫奇帕奇", weight: 3 }
        ]
    },
    {
        question: "如果你在地上发现了一个钱包，你会怎么做？",
        options: [
            { text: "立刻交给相关部门。", house: "赫奇帕奇", weight: 3 },
            { text: "自己查看并尝试找到失主。", house: "格兰芬多", weight: 3 },
            { text: "拿走现金，其他的东西原地不动。", house: "斯莱特林", weight: 3 },
            { text: "把它留在原地，希望失主回来找。", house: "赫奇帕奇", weight: 3 },
            { text: "分析情况以确定最佳行动方案。", house: "拉文克劳", weight: 3 },
            { text: "自己保管，直到有人来找。", house: "斯莱特林", weight: 3 }
        ]
    },
    {
        question: "你喜欢如何度过空闲时间？",
        options: [
            { text: "读书。", house: "拉文克劳", weight: 3 },
            { text: "学习新东西。", house: "拉文克劳", weight: 3 },
            { text: "玩游戏。", house: "格兰芬多", weight: 3 },
            { text: "和朋友一起玩。", house: "赫奇帕奇", weight: 3 },
            { text: "尝试新的刺激活动。", house: "格兰芬多", weight: 3 },
            { text: "从事个人项目。", house: "斯莱特林", weight: 3 },
            { text: "什么都不做，放松一下。", house: "赫奇帕奇", weight: 3 },
            { text: "把时间用在有益的事情上。", house: "斯莱特林", weight: 3 }
        ]
    },
    {
        question: "你最大的缺点是什么？",
        options: [
            { text: "我有时对别人太信任。", house: "赫奇帕奇", weight: 3 },
            { text: "我有时会冲动行事，不加思考。", house: "格兰芬多", weight: 3 },
            { text: "我有时过于分析，导致犹豫不决。", house: "拉文克劳", weight: 3 },
            { text: "我有时会操纵他人以达到自己的目的。", house: "斯莱特林", weight: 3 },
            { text: "我倾向于避免冲突。", house: "赫奇帕奇", weight: 3 },
            { text: "我有时过于专注于自己的目标。", house: "斯莱特林", weight: 3 },
            { text: "我有时会取笑他人，并感到快乐。", house: "斯莱特林", weight: 3 },
            { text: "我觉得自己没有什么缺点。", house: "斯莱特林", weight: 3 }
        ]
    },
    {
        question: "你如何处理小组工作？",
        options: [
            { text: "主动带领小组。", house: "格兰芬多", weight: 3 },
            { text: "主动承担责任，并将大部分工作分配给其他人。", house: "斯莱特林", weight: 3 },
            { text: "确保每个人都感到被重视和包含。", house: "赫奇帕奇", weight: 3 },
            { text: "专注于尽力完成自己的部分。", house: "拉文克劳", weight: 3 },
            { text: "确保小组遵循最有效的计划。", house: "斯莱特林", weight: 3 },
            { text: "在幕后按照指示行事。", house: "赫奇帕奇", weight: 3 },
            { text: "利用这个机会展示自己的能力。", house: "斯莱特林", weight: 3 },
            { text: "希望别人看不出我缺乏努力。", house: "赫奇帕奇", weight: 3 }
        ]
    },
    {
        question: "当事情不如意时，你如何反应？",
        options: [
            { text: "保持冷静，尝试找到解决方案。", house: "拉文克劳", weight: 3 },
            { text: "感到沮丧，但继续尝试。", house: "格兰芬多", weight: 3 },
            { text: "接受它并继续前进。", house: "赫奇帕奇", weight: 3 },
            { text: "找到责备的人。", house: "斯莱特林", weight: 3 },
            { text: "寻找通向成功的替代路径。", house: "斯莱特林", weight: 3 },
            { text: "假装它不困扰我。", house: "赫奇帕奇", weight: 3 },
            { text: "如果事情不如意，那说明我还没尝试。", house: "斯莱特林", weight: 3 }
        ]
    },
    {
        question: "你的朋友在学校作弊，你对此有何看法？",
        options: [
            { text: "立刻告诉老师。", house: "格兰芬多", weight: 3 },
            { text: "鼓励你的朋友坦白。", house: "赫奇帕奇", weight: 3 },
            { text: "帮助你的朋友避免被抓到。", house: "斯莱特林", weight: 3 },
            { text: "不参与，这不关我的事。", house: "拉文克劳", weight: 3 }
        ]
    },
    {
        question: "你对在课堂上对动物使用不可饶恕的咒语“钻心剜骨”来学习有何看法？",
        options: [
            { text: "在任何情况下都是绝对不可接受的。", house: "赫奇帕奇", weight: 3 },
            { text: "只有在没有其他学习方法的情况下。", house: "拉文克劳", weight: 3 },
            { text: "如果它服务于更大的目的，那就可以。", house: "斯莱特林", weight: 3 },
            { text: "我会挑战教授并拒绝这样做。", house: "格兰芬多", weight: 3 }
        ]
    },
    {
        question: "上课时你需要去洗手间，你如何请求？",
        options: [
            { text: "举手并礼貌地请求。", house: "赫奇帕奇", weight: 3 },
            { text: "什么都不说，直接起身离开。", house: "格兰芬多", weight: 3 },
            { text: "趁老师分心时悄悄溜出去。", house: "斯莱特林", weight: 3 },
            { text: "在讲课的合适暂停时请求。", house: "拉文克劳", weight: 3 }
        ]
    },
    {
        question: "如果有一个机会可以让你取得进步，但会伤害到几个人，你会怎么做？",
        options: [
            { text: "毫不犹豫地抓住机会。", house: "斯莱特林", weight: 3 },
            { text: "权衡好处与后果。", house: "拉文克劳", weight: 3 },
            { text: "如果会伤害到别人就拒绝。", house: "赫奇帕奇", weight: 3 },
            { text: "只有当这对我有重大意义时才继续。", house: "格兰芬多", weight: 3 }
        ]
    },
    {
        question: "霍格沃茨特快列车上禁止了你最喜欢的食物，而你每年都吃这种食物。你会如何处理？",
        options: [
            { text: "尽管有禁令，仍偷偷带上它。", house: "斯莱特林", weight: 3 },
            { text: "向工作人员投诉并要求解释。", house: "格兰芬多", weight: 3 },
            { text: "寻找允许的替代食物。", house: "拉文克劳", weight: 3 },
            { text: "接受现实，不吃我最喜欢的食物。", house: "赫奇帕奇", weight: 3 }
        ]
    }
];